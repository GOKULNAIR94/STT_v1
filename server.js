
var http = require('http');
var express = require('express'),
path = require('path');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', onRequest);
app.use(express.static(path.join(__dirname, 'public')));

function onRequest(request, response){
  //express.static(path.join(__dirname, 'public'));
  response.sendFile(path.join(__dirname, 'public/index.html'));
}

function send404(response){
	response.writeHead(404, {'Context-Type' : "text/plain"});
	response.write("Error 404 : Page not Found");
	response.end();
}




http.createServer(app).listen(8888);
console.log('Server is now Running');
