const cos = require('./cos');
/**
 * 查询存储桶列表
 */
cos.getService((err, data) => {
  console.log(data?.Buckets);
  // ...等效于...
  console.log(data && data.Buckets);
});
