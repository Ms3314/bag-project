const express = require('express')
const router = express.Router()
require('dotenv').config()
const ownerModel = require("../models/owner-model")
const productModel = require("../models/product.model.js")




process.env['NODE_ENV'] = 'DEVELOPMENT';
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'DEVELOPMENT') {
    router.post("/create" , async (req,res) => {
        let owners  =await ownerModel.find()
        if (owners.length > 0) {
            return res.status(503).send("you dont have the permision to create a new owner")
        }
        let {fullname , email , password} = req.body
        let createdOwner =  await ownerModel.create({
            fullname,
            email,
            password,
        })
        res.status(201).send(createdOwner)
    })
}

router.post("/addProducts" ,async (req , res) => {
    let {product_name , price , discount , bgcolor , panelcolor , textcolor} = req.body
    const createdProduct = await productModel.create({
        product_name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,
    })
    res.status(201).send(createdProduct)
})

router.get("/" , function (req , res) {
    res.send("hello its working ")
})

module.exports = router 