const http = require('http'),
      server = http.createServer(function(req, res) {
        res.writeHead(20, { 'Content-Type': 'text/plain' })
        res.end('Hello world\n')
      });

server.listen(3000, function() {
  console.log('ready')
})
