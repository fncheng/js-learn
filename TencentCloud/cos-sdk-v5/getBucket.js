/**
 * 查询对象列表
 */
const cos = require('./cos');
cos.getBucket(
  {
    Bucket: 'minimax-1256590847' /* 必须 */,
    Region: 'ap-shanghai' /* 必须 */,
    Prefix: '' /* 非必须 */,
  },
  (err, data) => {
    console.log(err || data.Contents);
  }
);
