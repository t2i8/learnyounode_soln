// write http server to serve a txt file for request
// arg1 = port ; arg2 = file location

var http = require('http'),
	fs = require('fs');

var server = http.createServer(function (request, response) {
	fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);