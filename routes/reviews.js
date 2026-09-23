const express = require("express");
const router = express.Router({ mergeParams: true });

const { isLoggedIn, isReviewAuthor } = require("../middleware");
const { reviewSchema } = require("../schema");
const ExpressError = require("../utilis/ExpressError");

const reviewController = require("../controllers/reviews");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);

    if (error) {
        throw new ExpressError(400, error);
    }

    next();
};

// Create Review
router.post(
    "/",
    isLoggedIn,
    validateReview,
    reviewController.createReview
);

// Delete Review
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    reviewController.destroyReview
);

module.exports = router;