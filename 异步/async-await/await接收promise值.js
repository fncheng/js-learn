function createPromise() {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'zs',
      age: 18,
    });
  });
}

const p1 = createPromise();

(async () => {
  let res = await p1;
  console.log(res);
})();
