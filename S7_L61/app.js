var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {

    resp.writeHead(200, {'Content-Type' : 'text/html'})
    fs.createReadStream(__dirname + '/index.html').pipe(resp);

}).listen(3000, '127.0.0.1');