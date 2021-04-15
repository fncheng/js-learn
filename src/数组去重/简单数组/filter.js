let arr = [1, 1, null, null, 'str', 'str', { name: 'zs' }, { name: 'zs' }];
function uniq(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return;
  }
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}

console.log(uniq(arr));
