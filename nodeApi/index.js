const express = require('express')
const app = express()


app.get('/table',(req, res) => {
    let num = req.query.number || 1
    let mainValue = ""
    for(let i=1; i<=10; i++){
        let value
        value = `${i}x${num}=`+ i*num + `\n`
        mainValue = mainValue.concat(value, "\n")
    }
    res.send(mainValue)
})

//listen port
app.listen(3000, () => {
    console.log('server is running on 3000');
})