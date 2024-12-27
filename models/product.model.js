// seperating concerns for the owner 
const mongoose = require('mongoose')

const ProductSchema =  mongoose.Schema({
    image : Buffer ,
    name : String,
    price : String ,
    discount : {
        type : Number ,
        default : 0
    },
    bgcolor : {
        type : String
    } ,
    panelcolor : String ,
    textcolor : String 
})

module.exports = mongoose.model("product" , ProductSchema)