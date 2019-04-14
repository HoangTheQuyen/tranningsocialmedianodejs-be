const User = require('../models/user.model')
const _ = require('lodash')
//const errorHandler = require('../helpers/dbErrorHandler')
module.exports = {

    create: (req, res, next) => {
        const user = new User(req.body)
        user.save()
            .then((user) => {
                res.status(200).json({ message: 'create successfully' })
            })

            .catch(err => {
                res.status(400).json({ message: "trungb roi, check lai" })

            })
    },
    list: (req, res) => {
        User.find()
            .then(users => {
                res.status(200).json(users)
            }).catch(err => {
                res.status(400).json(err)
            })
    },

    userByID: (req, res, next, id) => {
        
    },

    read: (req, res) => {
        console.log(req.params.userId)
        User.findOne({_id: req.params.userId}).exec()
        .then(user => {
            res.status(200).json({user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }})
        .catch(err =>{
            res.status(400).json(err)
        })
        
        })
    },

    update: (req, res, next) => {
       const user = new User(req.body)
        user.update()
        user.save()
        .then(users => {
            res.status(200).json({user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }}

            )
        })
        .catch(err =>{
            res.status(400).json(err)
        })
    },

    remove: (req, res, next) => {
        console.log(req.params.userId)
       User.findByIdAndRemove(req.params.userId).exec()
       .then(() => {
           res.status(200).json({message:"delete successfully"})
        .catch(err => {
            res.status(400).json({message:"can not delete"})
        })
       })
    }
}

