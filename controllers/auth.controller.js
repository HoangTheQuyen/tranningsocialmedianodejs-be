
// const expressJwt = require('express-jwt')
const expressJwt = require('express-jwt')
const _User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const _scretKey = require('../config/config')
module.exports = {
    signin: (req , res) => {
    _User.findOne({email: req.body.email})
    .then(user => {
        if(!user){
       return res.status(200).json({message:"not found"})
        }
        if(!user.authenticate(req.body.password)){
            return res.status(401).json({message:"access failed"})
        }
        const token = jwt.sign({_id: user._id},
            _scretKey.jwtSecret
            )
         res.cookie("t",token,{
             expire: Date.now + 10000
         })

         res.status(200).json({token, user:{
             _id:user._id,
             name: user.name,
             email: user.email
         }}

         )
    })
    }
}
// module.exports = {
//     // signin: (req, res) => {

//     // },
    
//     // signout: (req, res) => {
    
//     // },
    
//     // requireSignin: expressJwt({
    
//     // }),
    
//     // hasAuthorization: (req, res, next) => {
    
//     // }
// }
