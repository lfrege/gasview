var http = require('http');
var mserve = require('frontEnd');
const MAIN_PORT = 8080;

http.createServer(mserve.start).listen(MAIN_PORT);
