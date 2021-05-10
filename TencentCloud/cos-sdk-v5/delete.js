const COS = require('cos-nodejs-sdk-v5');
const cos = new COS({
  SecretId: 'AKIDVotlSnIJaeXDgvBmslneIyTnyvfgY6Td',
  SecretKey: 'B8tX1IbeTM4Zr44tHPq34rSp22oPlw1v',
});

cos.deleteObject(
  {
    Bucket: 'minimax-1256590847',
    Region: 'ap-shanghai',
    Key: 'img/20200610232407.png',
  },
  (err, data) => {
    console.log(err || data);
  }
);
