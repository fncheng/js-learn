const http = require('http');
const obj = {
  name: 'zs',
  age: 18,
};
http
  .createServer(function (req, response) {
    // 定义了一个post变量，用于暂存请求体的信息
    var post = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
      console.log('req data');
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
      console.log('req end');
    });
    //读取文件下的值并且将获得数据写入响应，并结束响应。
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*',
    });
    // response.write(JSON.stringify(obj));
    response.write('<h3>123</h3>');
    response.end();
  })
  .listen(3000, '127.0.0.1');
