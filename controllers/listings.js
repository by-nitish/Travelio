const Listing = require("../models/listing");
const User = require("../models/user");
const axios = require("axios");

// Index
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

// New Form
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

// Create Listing
module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image={filename,url};

    let location = `${req.body.listing.location}, ${req.body.listing.country}`;

    let response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: location,
                format: "json",
                limit: 1,
            },
            headers: {
                "User-Agent": "Wonderlust",
            },
        }
    );

        if (response.data.length>0) {
        newListing.geometry={
            lat: parseFloat(response.data[0].lat),
            lng: parseFloat(response.data[0].lon),
        };
    }

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

// Show Listing
module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

// Edit Form
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { listing });
};

// Update Listing
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing,},{new: true});

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = { filename, url };
       
    }

    let location = `${req.body.listing.location}, ${req.body.listing.country}`;

    let response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: location,
                format: "json",
                limit: 1,
            },
            headers: {
                "User-Agent": "Wonderlust",
            },
        }
    );

    if (response.data.length > 0) {
        listing.geometry = {
            lat: parseFloat(response.data[0].lat),
            lng: parseFloat(response.data[0].lon),
        };
    } else {
        listing.geometry = undefined;
    }


    await listing.save();
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};
// Delete Listing
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

// show all listing in map..

module.exports.renderMap = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/map.ejs", { allListings });
};


//search

module.exports.searchListings = async (req, res) => {
    let { q } = req.query;

    if (!q || q.trim() === "") {
        return res.redirect("/listings");
    }

    let search = q.trim();

    const allListings = await Listing.find({
        $or: [
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
            { title: { $regex: search, $options: "i" } },
        ],
    });

    res.render("listings/index.ejs", { allListings });
};

/// filter by catagory of listings

module.exports.filterListings = async (req, res) => {
    let { category } = req.params;

    const allListings = await Listing.find({ category });

    res.render("listings/index.ejs", { allListings });
};


////  adding wishlist

module.exports.addToWishlist = async (req, res) => {
    let { id } = req.params;
    let user = await User.findById(req.user._id);
    if (!user.favorites.includes(id)) {
        user.favorites.push(id);
        await user.save();
        req.flash("success", "Added to your wishlist!");
    } else {
        req.flash("error", "Already in your wishlist!");
    }

    res.redirect(`/listings/${id}`);
};

/// remove listing

module.exports.removeFromWishlist = async (req, res) => {
    let { id } = req.params;
    await User.findByIdAndUpdate(req.user._id, {
        $pull: { favorites: id },
    });
    req.flash("success", "Removed from wishlist!");
    res.redirect("/wishlist");
};