const express = require('express')
const mainController = require('../controller/mainController')
const router = express.Router()

router.get('/', mainController.homePage)
router.post('/', mainController.homePost)

module.exports = router
