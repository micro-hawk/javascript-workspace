const nodemailer = require('nodemailer');
require('dotenv').config()



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: process.env.USER,
    // pass: process.env.PASS
    user: "xyz@gmail.com",
    pass: "XXXXXXXXX"
}
});

const mailOptions = {
  to: 'hello@gmail.com',
  subject: '!IMPORTANT',
  text: `Yeahhh, you're query has been sent to FLEXBUILD `    
};

const sendMail = (mailConfig) => {
  transporter.sendMail(mailConfig, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}

module.exports = sendMail