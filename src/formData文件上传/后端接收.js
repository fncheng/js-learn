const http = require('http'),
  formidable = require('formidable');
const uploadPic = require('./putObject');
path = require('path');
const fs = require('fs');
const server = http.createServer(function (req, res) {
  if (req.method.toLowerCase() === 'post') {
    // 实例化
    const form = formidable({
      multiples: true,
      uploadDir: path.resolve(__dirname, 'upload'),
    });
    form.parse(req, (err, fields, files) => {
      // console.log('fields:', fields);
      // console.log('files:', files);
      console.log(files.myfile.path);
      uploadPic(files.myfile.path);
      res.writeHead(200, {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 需要设置为允许跨域
      });
      res.end(JSON.stringify({ fields, files }, null, 2));
    });
    return;
  }
  // res.writeHead(200, {
  //   'content-type': 'text/html',
  //   'Access-Control-Allow-Origin': '*',
  // });
  // res.end('Done!');
});
server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000/ ...');
});
