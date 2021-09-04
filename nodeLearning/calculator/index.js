const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
const operations = (numb1, numb2) => {
    let temp = {}
    temp[0] = numb1+numb2
    temp[1] = numb1-numb2
    temp[2] = numb1*numb2
    temp[3] = numb1/numb2
    return temp;
}

app.post('/', (req, res) => {
    let n1 = Number(req.body.num1)
    let n2 = Number(req.body.num2)
    let r = n1+n2
    // res.send(r.toString())
    res.send(operations(n1,n21))
})


//listen
app.listen(5000, () => {
    console.log('server running on port 5000')
})