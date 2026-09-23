const express = require("express");
const router = express.Router();

const ExpressError = require("../utilis/ExpressError");
const { listingSchema } = require("../schema");
const { isLoggedIn, isOwner } = require("../middleware");

const listingController = require("../controllers/listings");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    }
    next();
};

// Index
router.get("/", listingController.index);

// New
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Create
router.post(
    "/",
    isLoggedIn,
    validateListing,
    upload.single('listing[image]'),
    listingController.createListing
);

// show all listing in map
router.get("/map", listingController.renderMap);

// search 
router.get("/search", listingController.searchListings);

//filter by catagory of listings
router.get("/filter/:category", listingController.filterListings);

// whishlist...

router.post("/:id/wishlist", isLoggedIn,listingController.addToWishlist);

/// remove wishlist
router.post("/:id/wishlist/remove",isLoggedIn,listingController.removeFromWishlist);




// Show
router.get(
    "/:id",
    listingController.showListing
);

// Edit
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    listingController.renderEditForm
);

// Update
router.put(
    "/:id",
    isLoggedIn,
    isOwner,
     upload.single('listing[image]'),
    validateListing,
    listingController.updateListing
);

// Delete
router.delete(
    "/:id",
    isLoggedIn,
    isOwner,
    listingController.destroyListing
);

module.exports = router;