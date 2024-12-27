const express = require('express')
const router = express.Router()
const {RegisterUser , LoginUser , LogoutUser} = require("../controllers/Authentication.controller.js")
const { isLoggedIn } = require('../middlewares/isLoggedIn.middleware.js')

// so the url will be router to this part from the 
router.get("/" , function (req , res) {
    res.send("hello its working ")
})

router.post("/register" , RegisterUser)
router.post("/login" , LoginUser)
router.post("/logout" , isLoggedIn , LogoutUser)

module.exports = router 