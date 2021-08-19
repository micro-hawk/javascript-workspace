const express = require('express')
const userController = require('../controller/user')

const router = express.Router()

router.get('/abc', userController.getUser)

module.exports = router