const mongoose = require('mongoose')

mongoose
.connect("mongodb://127.0.0.1:27017/localhost/bag-project")
.then(()=> {
    console.log("connected")
    // debuggers can be used instead for better use 
})
.catch((err)=> {
    console.log(err)
})

// this will give you the whole control over the database , and we export it 
module.exports = mongoose.connection