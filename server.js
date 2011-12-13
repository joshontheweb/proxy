var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//

var options = {
  router: {
    'grooveclock.com': '127.0.0.1:8000',
    'eightbitbeats.com': '127.0.0.1:7777',
  	'classofkhan.com': '127.0.0.1:3000',
  	'dev.keepitrealtime.com': '127.0.0.1:3000',
  	'keepitrealtime.com': '127.0.0.1:3001',
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);



// grooveclock
//httpProxy.createServer(8000, 'localhost').listen(80);

// eightbitbeats
//httpProxy.createServer(7777, 'localhost').listen(80);
