function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let count = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      count++;
      if (compareFn(array[j], array[j + 1])) {
        swap(array, j, j + 1);
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(count);
  return array;
}
let defaultCompare = function (a, b) {
  return a > b ? true : false;
};
/**
 * 交换数组下标1和下标2的值
 * @param {Array} array 交换的数组
 * @param {Number} a 下标1
 * @param {Number} b 下标2
 */
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

let res = bubbleSort([16, 97, 9, 17, 1, 8]);
console.log(res);
