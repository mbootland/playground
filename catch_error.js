var net = require('net');

net.createServer(function (connection) {
  connection.on('error', function (err) {
  // err is an Error object
  });
}).listen(400);
