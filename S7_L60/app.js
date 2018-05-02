var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {

    resp.writeHead(200, {'Content-Type' : 'text/html'})

    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var message = 'Hello World...';
    html = html.replace('{Message}',message);
    resp.end(html);

}).listen(3000, '127.0.0.1');