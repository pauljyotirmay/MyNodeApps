var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000;

http.createServer(function(req, res) {
	var q = url.parse(req.url, true);
	//console.log(q);
	var fileName = "." + q.pathname;
	if (fileName == './') {
		fileName = './index';
	}

	fileName += '.html';

	fs.readFile(fileName, function(err, data) {
		if (err) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			return res.end('404 not found');
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("....Incoming request: " + req.url);
		res.end();
	});
}).listen(PORT);

console.log("Server listening on Port " + PORT + "....");