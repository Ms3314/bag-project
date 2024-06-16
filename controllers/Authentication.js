const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {generateToken} = require('../utils/generateToken.js')

module.exports.RegisterUser = (req , res) => {
    // try catch is a dope thing because like you try an code but if there is an error there then you get that error using catch 
    try {
        let {email , password , fullname} = req.body

        if (password === undefined) return res.send("password is not defined")

        bcrypt.genSalt(10 ,async  (err ,salt) => {
            bcrypt.hash(password , salt ,async function (err ,hash ) {
                if (err) return res.status(500).send(err.message)
                else {
                    const newUser = await userModel.create({
                        email , password : hash , fullname,
                    }) 
                    const token = generateToken(newUser)
                    res.cookie("token" , token)
                    res.status(200).send("user created successfully")
                }
            
                
            })
        })

         } catch (error) {
             console.log(error.message)
             res.status(500).send(error.message)
         }
        }