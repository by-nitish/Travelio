const express = require("express");
const router = express.Router();

const passport = require("passport");

const { saveRedirectUrl,isLoggedIn } = require("../middleware");

const userController = require("../controllers/users");


// Signup
router.get(
    "/signup",
    userController.renderSignupForm
);

router.post(
    "/signup",
    userController.signup
);

// Login
router.get(
    "/login",
    userController.renderLoginForm
);

router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.login
);

// Logout
router.get(
    "/logout",
    userController.logout
);

/// show wish listing....
router.get("/wishlist",isLoggedIn,userController.renderWishlist);



module.exports = router;