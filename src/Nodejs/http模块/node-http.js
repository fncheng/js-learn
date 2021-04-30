const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text-plain');
    res.write('123');
    res.write('hello2');
    res.end('helloworld');
  })
  .listen(3000, '127.0.0.1');
