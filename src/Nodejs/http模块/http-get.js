const http = require('http');

const options = {
  host: '127.0.0.1',
  port: 3000,
  path: '',
  method: 'GET',
  Headers: {
    'Content-Type': 'text-plain',
  },
};
// 建立请求
const req = http.request(options, (res) => {
  // setEncoding()方法用于设置请求的编码
  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    console.log(chunk);
  });
});
req.on('error', (error) => {
  console.log(error);
});
req.end();
