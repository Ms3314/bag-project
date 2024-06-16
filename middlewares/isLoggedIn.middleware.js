// why do we need this ?? : so we add this to some routes so that the user cannot enter the protected routed without being logged , this thing just checks if you are logged in or not basically

const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')


module.exports.isLoggedIn = async (req , res , next) => {
    if (!req.cookies.token) {
        req.flash("error" , "you need to login first")
        return res.redirect('/')
    }
    try {
        let decode = jwt.verify(req.cookies.token , process.env.JWT_SECRET)
        const User = await userModel.findOne({email : decode.email})
        .select("-password") // this part like removes the password
         req.user = User
        next()
    } catch (error) {
        req.flash("error" , "some error occured")
        res.redirect('/')
    }
}