const express = require('express')
const router = express.Router()
const {RegisterUser} = require("../controllers/Authentication.js")

// so the url will be router to this part from the 
router.get("/" , function (req , res) {
    res.send("hello its working ")
})

router.post("/register" , RegisterUser)
module.exports = router 