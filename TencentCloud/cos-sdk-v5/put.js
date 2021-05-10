const fs = require('fs');
const cos = require('./cos');
const config = require('./config');
const filePath = './5g.png';
cos.putObject(
  {
    ...config,
    Key: '5g.png',
    StorageClass: 'STANDARD',
    Body: fs.createReadStream(filePath),
    onProgress(progressData) {
      console.log(JSON.stringify(progressData));
    },
  },
  (err, data) => {
    console.log(err || data);
  }
);
