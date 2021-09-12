const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    
    const data = {
        member : [
            {
                email_address: email,
                status : "subscribed",
                merge_fields : {
                    FNAME : fname,
                    LNAME : lname
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data)

    const url = 'https://us5.api.mailchimp.com/3.0/lists/6792942c90'
    const options = {
        method : 'POST',
        auth : 'microhawk:60f5734415bc2f23d063031152c435aa-us5'
    }
    https.request(url, options, () => {
        response.on('data', () => {
            console.log(JSON.parse(data));
        })
    })

    req.write(jsonData)
    req.end()
})

//listen 3000
app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})


//API KEY
// 60f5734415bc2f23d063031152c435aa-us5


//list id 
// 6792942c90`