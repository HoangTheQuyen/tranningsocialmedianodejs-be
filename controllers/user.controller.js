const User = require('../models/user.model')
const _ = require('lodash')
//const errorHandler = require('../helpers/dbErrorHandler')
module.exports = {

    create: (req, res, next) => {
        const user = new User(req.body)
        user.save()
            .then((user) => {
                res.status(200).json({ message: 'create sucessfully' })
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

    },

    update: (req, res, next) => {

    },

    remove: (req, res, next) => {

    }
}

