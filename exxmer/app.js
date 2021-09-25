const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js')) 


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})