const mongoose = require('mongoose')
const dbgr = require('debug')('DEV:db')
const config = require("config")

mongoose
.connect(`${config.get('MONGO_URI')}/bag-project`)
.then(()=> {
    console.log("connected to the database")
    // debuggers can be used instead for better use 
})
.catch((err)=> {
    console.log(err)
})

// this will give you the whole control over the database , and we export it 
module.exports = mongoose.connection