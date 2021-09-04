const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    let n1 = Number(req.body.num1)
    let n2 = Number(req.body.num2)
    let r = n1+n2
    res.send(r.toString())
})


//listen
app.listen(5000, () => {
    console.log('server running on port 5000')
})