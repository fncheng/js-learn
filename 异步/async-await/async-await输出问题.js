function createPromise(time) {
  console.log('createPromise:', time);
  return new Promise((resolve) => {
    console.log('createPromise new Promise:', time);
    resolve(time);
  });
}
/**
 *
 * @param {any} msg
 * @returns a Promise
 */
async function main(msg) {
  console.log('main' + msg);
  let res = await createPromise(msg);
  console.log('main res:', res);
  return res;
}
async function second() {
  let res = await main(456)
    .then((res) => {
      console.log('second then:', res);
    })
    .catch((err) => {
      console.log('second error:', err);
    });
  console.log('result:', res);
}
// main(123) return a Promise
main(123).then((res) => {
  console.log('main then res:', res);
});
second(456);
console.log(789);
