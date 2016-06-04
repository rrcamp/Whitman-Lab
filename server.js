var http = require('http');
var quotes = require('./stuff');

http.createServer(function(requies, response){
  response.writeHead(200, {'Content-type': "text/plain"});
  response.write(quotes.quotes());
  response.end();
}).listen(8888);


app.use(express.static(__dirname + '/public'))
