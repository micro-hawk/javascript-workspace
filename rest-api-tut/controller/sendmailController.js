const sendMailService = require('../service/sendmailService')
const mail = {}
mail.getMail = (req,res) => {
    const body = req.body
    res.send(sendMailService.fetchMail(body))
}

module.exports = mail