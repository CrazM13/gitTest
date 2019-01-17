const http = require('http');
const timeStamp = require('./timeStamp');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<p>The Date And Time Is <b>" + timeStamp.timeStamp() + "</b></p><br />");
    res.end("<p>Welcome to the <b><i>Homepage</i></b>!</p>");
}).listen(3030);
