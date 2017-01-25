var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
	fs.readFile('index.html', function (err, content) {
		res.write(decodeURIComponent(content));
		res.end();
	})
}).listen(8080);