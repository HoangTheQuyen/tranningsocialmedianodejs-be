// const express = require('express') 
// const _authCtrl = require('../controllers/auth.controller')

// const router = express.Router()

// router.route('/auth/signin').post(_authCtrl.signin)
// router.route('/auth/signout').get(_authCtrl.signout) 

// module.exports = router
const express = require('express')
const _authCtrl = require('../controllers/auth.controller')
const router = express.Router()
router.route('/auth/signin').post(_authCtrl.signin)
module.exports = router