const express = require("express");
const router = express.Router()
const {isLoggedIn} = require("../middlewares/isLoggedIn.middleware");

// Home route
router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error });
    //res.render("index")
});

// Shop route with authentication middleware
router.get("/shop", isLoggedIn, (req, res) => {
    res.render("shop");
});

module.exports = router;
