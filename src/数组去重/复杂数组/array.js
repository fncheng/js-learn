const typeCheck = require('../../dataType/index');
let arr = [
  1,
  1,
  null,
  null,
  'str',
  'str',
  { name: 'zs' },
  { name: 'zs' },
  [1, 2],
  [1, 2],
];

function uniq(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return;
  }
  let newArr = [];
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (typeCheck(arr) === '[object Object]') {
    }
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(uniq(arr));
