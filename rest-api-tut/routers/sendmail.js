const express = require('express')
const sendmailController = require('../controller/sendmailController')
const router = express.Router()

router.post('/',sendmailController.getMail)

module.exports = router
