// seperating concerns for the owner 
const mongoose = require('mongoose')

const ownerSchema =  mongoose.Schema({
    fullname : {
        type : String,
        minLength : 3 ,
        trm : true
    },
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
