const express = require('express')
const router = express.Router()
// so the url will be router to this part from the 
router.get("/" , function (req , res) {
    res.send("hello its working ")
})

module.exports = router 