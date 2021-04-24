let arr = [1, 1, null, null, 'str', 'str', { name: 'zs' }, { name: 'zs' }];
function uniq(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return;
  }
  return [...new Set(arr)];
}

console.log(uniq(arr));
