const COS = require('cos-nodejs-sdk-v5');
const cos = new COS({
  SecretId: 'AKIDVotlSnIJaeXDgvBmslneIyTnyvfgY6Td',
  SecretKey: 'B8tX1IbeTM4Zr44tHPq34rSp22oPlw1v',
});

module.exports = cos;
