var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var server = http.createServer(app);
var io = require('socket.io')(server);
var port = '3000';
	
app.set('port', port);
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');  

app.get('/', (req, res) => {
	res.render('index.ejs');
});

var gameserver = require('./server/server.js')(io);

server.listen(port);