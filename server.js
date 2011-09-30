var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
httpProxy.createServer(function (req, res, proxy) {
  //
  // Buffer the request so that `data` and `end` events
  // are not lost during async operation(s).
  //
  var buffer = httpProxy.buffer(req);

    proxy.proxyRequest(req, res, {
      host: 'localhost',
      port: 9000, 
      buffer: buffer
    });      
}).listen(8000);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied: ' + req.url +'\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);
