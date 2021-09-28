const express = require('express')
const mainRouter = require('./router/mainRouter')

const app = express()
const appPort = 3000
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js')) 

app.use(mainRouter)

app.listen(appPort, () => {
    console.log(`Server is running on port ${appPort}`)
})


