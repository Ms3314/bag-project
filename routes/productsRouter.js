
const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product.model");

// Route for creating a product
router.post("/create", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

        const createdProduct = await productModel.create({
            name,
            image: req.file.buffer,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
        });
        
        req.flash("success" , "Product created succesfully")
        res.redirect("/owner/admin")
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

module.exports = router;
