const { default: axios } = require('axios');

axios
  .get('http://127.0.0.1:3000')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.error(err);
  });
