var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexBuf = fs.readFileSync("index.html");
  response.send(indexBuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// vim: et sw=2 sts=2 ai
