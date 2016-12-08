var express = require('express');
var bodyparser = require('body-parser');

var connection = require('./connection');
var routes = require('./routes');
 
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var server_port = 8080;
var server_ip_address = '127.0.0.1';
var server_ip_address_http = 'http://127.0.0.1';

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', server_ip_address_http);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
 
app.use(allowCrossDomain);

connection.init();
routes.configure(app);

var server = app.listen(server_port, server_ip_address, function() {
  console.log('Server active, listening on port ' + server.address().port + '.');
});
