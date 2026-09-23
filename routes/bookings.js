const express = require("express");
const router = express.Router({ mergeParams: true });

const bookingController = require("../controllers/bookings");
const { isLoggedIn } = require("../middleware");

const { bookingSchema } = require("../schema");
const ExpressError = require("../utilis/ExpressError");

const validateBooking = (req, res, next) => {
    let { error } = bookingSchema.validate(req.body);

    if (error) {
        throw new ExpressError(400, error);
    }

    next();
};



router.get("/new", isLoggedIn, bookingController.renderBookingForm);

router.post("/", isLoggedIn,validateBooking,bookingController.createBooking);

/// show my bookings 
router.get("/my", isLoggedIn, bookingController.myBookings);
// delete my bookings
router.delete("/:bookingId",isLoggedIn,bookingController.cancelBooking);

module.exports = router;