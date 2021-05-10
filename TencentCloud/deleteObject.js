const { default: axios } = require('axios');

const config = {
  method: 'delete',
  url: 'https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/test1.png',
  headers: {
    Authorization:
      'p7yRaFaFB2JB4ZaGk2VANCpZoPJhPTEyNTY1OTA4NDcmYj1taW5pbWF4Jms9QUtJRHRiM0dEcFFJOGgzREczdU9ncGhMQTJlVGs0R1BkNFhrJmU9MTY1MjA3MzIyMSZ0PTE2MjA1MzcxNjcmcj0xMjM0NTYmZj0',
    'x-cos-security-token':
      'cH2zi6nk8BPR5Z4iU64pCCfI6qGYM3Sa3f87098ddfd05f004267e530a3b4643adycNNI5TIv78VRDm0ek1zstVv-3cfIQj0PUtM2ru6mxB12jMCEg3nAsW2yYO3syMjR5oHyovr-sKzSyuCAIBQwZWdd41C5z5vhOQn_HJgeHpDY7YVbASzKjv0x93Q1MNYn0jZPh0-bPCRn6rXdFUM-4GBdAbW4tCopTU3rc0jms',
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
