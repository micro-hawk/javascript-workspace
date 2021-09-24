const sendMail = require('../public/sendMail')
const mail = {}

mail.fetchMail = (body) => {
    const mailConfig = {
        to: 'dasvikas0071@gmail.com',
        subject: 'FlexBuild INFO',
        text: JSON.stringify(body)   
    }
    sendMail(mailConfig)
    return 'SUCCESS '
}

module.exports = mail