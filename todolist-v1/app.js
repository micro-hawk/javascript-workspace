const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let items=[]
app.get('/', (req, res) => {
    let today = new Date()
    let currentDay = today.getDay()
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }
    let day = today.toLocaleDateString("en-US", options);

    res.render('index', {
        kindOfDay : day,
        newListItem : items
    })
})

app.post('/', (req, res) => {
    let item = req.body.listInput
    items.push(item)
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})
