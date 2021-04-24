function createPromise(time) {
  return new Promise((resolve) => {
    console.log('createPromise', time);
    resolve(time * time);
  });
}
/**
 *
 * @param {any} msg
 * @returns a Promise
 */
async function queryProductInfo(msg) {
  console.log('queryProductInfo', msg);
  let res = await createPromise(msg);
  // await res;
  // console.log(res);
  return res;
}

// let res = queryProductInfo(3);
// console.log(res);
let newArr = [1, 3, 5].map((item) => {
  queryProductInfo(item).then((res) => res);
});
