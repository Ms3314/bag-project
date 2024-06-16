const userModel = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {generateToken} = require('../utils/generateToken.js')
const { signedCookie } = require('cookie-parser')

module.exports.RegisterUser = async (req , res) => {
    // try catch is a dope thing because like you try an code but if there is an error there then you get that error using catch 
    try {
        let {email , password , fullname} = req.body

        if (password === undefined) return res.send("password is not defined")
        if(req.cookies.token) return res.send("user already logged , logout and then register")

        let userCheck = await userModel.findOne({email})
        if(userCheck) return res.status(400).send("user already exist")

        bcrypt.genSalt(10 ,async  (err ,salt) => {
            bcrypt.hash(password , salt ,async function (err ,hash ) {
                if (err) return res.status(500).send(err.message)
                else {
                    const newUser = await userModel.create({
                        email , password : hash , fullname,
                    }) 
                    const token = generateToken(newUser)
                    res.cookie("token" , token)
                    res.status(200).send("user created successfully and logged In")
                }
            
                
            })
        })

         } catch (error) {
             console.log(error.message)
             res.status(500).send(error.message)
         }
        }

module.exports.LoginUser = async (req , res) => {
    try {
        let {email , password} = req.body
    //console.log(signedCookie)
    console.log(req.cookies.token)
    if(req.cookies.token) return res.status(400).send("user already logged in please logout first")
    let user = await userModel.findOne({email})
    if (!user) return res.status(400).send("Invalid Credentials")
    else {
            bcrypt.compare(password , user.password , (err , result) => {
            if (result === false) return res.status(500).send("Invalid Credentials")
            else {
                const token = generateToken(user)
                res.cookie("token" , token)
                res.status(200).send("user logged in successfully")
            }
        }
        )
    }
    } catch (error) {
        res.status(500).send(error.message) 
        console.log(error.message)
    }
    
}

module.exports.LogoutUser = async (req , res) => {
    res.clearCookie("token")
    res.status(200).send("user logged out")
}