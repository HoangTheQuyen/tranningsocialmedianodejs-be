const express = require('express')
const _userCtrl =require('../controllers/user.controller')
// const _authCtrl =require('../controllers/auth.controller')

const router = express.Router()

//router.route("/api/users").get(_userCtrl.list)
router.route("/api/users").post(_userCtrl.create)
router.route("/api/users/:userId").put(_userCtrl.update)
router.route("/api/users/:userId").delete(_userCtrl.remove)
router.route("/api/users/:userId").get(_userCtrl.read)

module.exports = router