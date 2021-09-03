const express = require('express')
const fs = require('fs')
const url = require('url')
const app = express()

app.use('/public', express.static(__dirname + '/public'));  
app.use(express.static(__dirname + '/public')); 

app.post('/receive', function(request, respond) {
    var body = '';
    filePath = __dirname + '/public/data.txt';
    request.on('data', function(data) {
        body += data;
    });

    request.on('end', function (){
        fs.appendFile(filePath, body, function() {
            respond.end();
        });
    });
});


app.listen(3000, () => {
    console.log('Server is running at 3000')
})