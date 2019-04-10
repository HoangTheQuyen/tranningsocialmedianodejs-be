const express = require('express')
const _userCtrl =require('../controllers/user.controller')
// const _authCtrl =require('../controllers/auth.controller')

const router = express.Router()

router.route("/api/users").get(_userCtrl.list)
router.route("/api/users").post(_userCtrl.create)



module.exports = router