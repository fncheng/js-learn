function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;
  let count = 0;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    // 优化 let j=i+1
    for (let j = i + 1; j < length; j++) {
      count++;
      if (compareFn(array[indexMin], array[j])) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
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
let res = selectionSort([5, 4, 3, 2, 1]);
console.log(res);
