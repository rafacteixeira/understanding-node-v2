var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/',function(request, response, next){
    console.log('Request URI: ' + request.url);
    next();
});

app.get('/', function(request, response){
    response.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello World!</h1></body></html>')
});

app.get('/person/:id', function(request, response){
    response.send('<html><head/><body><h1>Person: ' + request.params.id + '</h1></body></html>')
});

app.get('/api', function(request, response){
    response.json({ firstname: 'John', lastname: 'Doe'})
});

app.listen(port);