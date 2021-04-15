let arr = [1, 1, null, null, 'str', 'str', { name: 'zs' }, { name: 'zs' }];
function uniq(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return;
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(uniq(arr));
