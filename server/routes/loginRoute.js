const express = require('express')
const router = express.Router()
const logController = require('../controller/loginController')

router.route('/')
    .post(logController.loginUser)

module.exports = router;