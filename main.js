var http = require('http');
var mserve = require('frontEnd');
var myl = require('mysqlLink');

const MAIN_PORT = 8080;
readData = function(req, res)
{
	req.body = "";
	req.on('data', function(data) { req.body += data; } );
	req.on('end', function() { mserve.start(req, res); } );
}

http.createServer(readData).listen(MAIN_PORT);

