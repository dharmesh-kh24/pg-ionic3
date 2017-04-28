var express = require('express'),
    app = express();
var http = require('http');
var server = http.createServer(app);
app.use(express.static(__dirname + '/www'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/www/index.html');
})
var port = process.env.PORT || 4200;
server.listen(port, function(req, res) {
    console.log('server running at port ' + port);
})