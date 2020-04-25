const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();

app.use('/css', express.static(__dirname + "/css"));
app.use('/js', express.static(__dirname + "/js"));
app.use('/images', express.static(__dirname + "/images"));
app.use('/lib', express.static(__dirname + "/lib"));

const server = http.createServer(app).listen(8080, function() {console.log('Server Running at ... ')});


app.get('/', function(req, res) {
   fs.readFile('index.html', function(err, data) {
       res.writeHead(200, {'Content-Type' : 'text/html'});
       res.end(data);
   }); 
});