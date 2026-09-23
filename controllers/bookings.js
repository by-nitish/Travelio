const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.renderBookingForm = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);

    res.render("bookings/new.ejs", { listing });
};

module.exports.createBooking = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);

    let booking = new Booking(req.body.booking);

    booking.listing = listing._id;
    booking.user = req.user._id;

    let checkIn = new Date(booking.checkIn);
    let checkOut = new Date(booking.checkOut);


    //// this check is called bussiness logic validation check

   if (checkOut <= checkIn) {
    req.flash("error", "Check-out date must be after check-in date.");
    return res.redirect(`/listings/${id}/bookings/new`);
   }


    let nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    let basePrice = nights * listing.price;
    let gst = basePrice * 0.18;

    booking.totalPrice = basePrice + gst;
    
    await booking.save();

    req.flash("success", "Booking confirmed!");
    res.redirect("/bookings/my");
};

module.exports.myBookings = async (req, res) => {
    const bookings = await Booking.find({
        user: req.user._id,
    }).populate("listing");

    res.render("bookings/index.ejs", { bookings });
};

module.exports.cancelBooking = async (req, res) => {
    let { bookingId } = req.params;

    await Booking.findByIdAndDelete(bookingId);

    req.flash("success", "Booking cancelled successfully!");
    res.redirect("/bookings/my");
};