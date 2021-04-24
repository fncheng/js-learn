function makePromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
const pm1 = makePromise(2000);
const pm2 = new Promise((reject) => {
  setTimeout(() => {
    reject('error');
  }, 3000);
});
const pm3 = makePromise(4000);
// Promise.all([pm1, pm2, makePromise(4000)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })5

// Promise.any([pm2, pm1, pm2, makePromise(5000)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.allSettled([pm2, pm1, pm2, makePromise(5000)])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
