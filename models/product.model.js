const ProductSchema =  mongoose.Schema({
    image : String ,
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