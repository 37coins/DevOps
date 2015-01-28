require('shelljs/global');
var http = require('http');

http.createServer(function (req, res) {
  var out = exec('bitcoin-cli getwalletinfo', { silent: true });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(out.code == 0 ? 'OK' : out.output);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
