// seperating concerns for the owner 
const mongoose = require('mongoose')

const userSchema =  mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    isAdmin : Boolean,
    contact : Number,
    products : {
        type : Array,
        default : []
    },
    picture : String ,
    gstin : String  
})

module.exports = mongoose.model("owner" , ownerSchema)
