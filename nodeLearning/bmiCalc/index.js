const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

const bmi = (w,h) =>{
    return  w/(h*h)
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/', (req,res) => {
    let w = req.body.weight
    let h = req.body.height
    let result = bmi(w,h)
    res.send(result.toString())
})

//LISTEN TO PORT
app.listen(3000, () => {
    console.log('Server is running on port 3000 !')
})