const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})

app.post('/', (req, res) => {
    const query = req.body.cityName
    const apiKey = "284a9239a736c79386472332a4de0628"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`
        https.get(url , (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            // console.log(data)       //It will get data in the form of hexadecimal
            const weatherData = JSON.parse(data)        //PARSING JSON means it will convert string hexadecimal in JSON FORMAT
        
            const temp = weatherData.main.temp
            const weatherDesc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

            res.send(`
            <img src="${imgURL}">
            <h1>The temperature in ${query} is ${temp} degree celsius</h1>
            <h3>And the weather type is ${weatherDesc} !</h3>
            `)     
        })

    })
})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})



// const url = "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=284a9239a736c79386472332a4de0628"
// https.get(url , (response) => {
//     console.log(response.statusCode);
//     response.on("data", (data) => {
//         // console.log(data)       //It will get data in the form of hexadecimal
//         const weatherData = JSON.parse(data)        //PARSING JSON means it will convert string hexadecimal in JSON FORMAT
    
//         const temp = weatherData.main.temp
//         const weatherDesc = weatherData.weather[0].description
//         const icon = weatherData.weather[0].icon
//         const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

//         res.send(`
//         <img src="${imgURL}">
//         <h1>The temperature in kolkata is ${temp} degree celsius</h1>
//         <h3>And the weather type is ${weatherDesc} !</h3>
//         `)
//     })

// })