const express = require("express");
const router = express.Router()
const {isLoggedIn} = require("../middlewares/isLoggedIn.middleware");
const productModel = require("../models/product.model");

// Home route
router.get("/", (req, res) => {
    if (req.cookies.token) {
        res.redirect("/shop");
    }
    let error = req.flash("error");
    res.render("index", { error });
    //res.render("index")
});

// Shop route with authentication middleware
router.get("/shop", isLoggedIn, async (req, res) => {
    let product= await productModel.find()
    res.render("shop" , {product});
});

module.exports = router;
