let arr = [1, 1, null, null, 'str', 'str', { name: 'zs' }, { name: 'zs' }];

function uniq(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return;
  }
  let newArr = [arr[0]];
  arr = arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(uniq(arr));
