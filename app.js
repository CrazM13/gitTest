const http = require('http');
const url = require('url');
const fs = require('fs');

const timeStamp = require('./timeStamp');

http.createServer(function(req, res) {

	/*// File System
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
	*/
	
	// Parsing
	res.write("<h1>Welcome to the <i>Homepage</i>!</h1>");
	res.write("<p>The Date And Time Is <b>" + timeStamp.timeStamp() + "</b></p><br />");
	res.write("<p>This Is The URL You Requested: <b>" + req.url + "</b></p>");
	var q = url.parse(req.url, true).query;
	var resTxt = q.id + " " + q.user;
	var qList = url.parse(req.url, true);
	console.log(qList.host); // localhost:3030
	console.log(qList.pathname); // /users.html
	console.log(qList.search); // ?id=
	//console.log(qList);
	res.end("<p>" + resTxt + "</p>");
	
}).listen(3030);