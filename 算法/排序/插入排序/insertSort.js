function insertSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let temp;
  let count = 0;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    count++;
    // 前一项和后一项进行比较
    // 实际比较 array[j-1] 和 array[j]
    while (j > 0 && compareFn(array[j - 1], temp)) {
      console.log('交换前:', array[j - 1], array[j]);
      // 如果前一项 > 后一项
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
    console.log(array);
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
let res = insertSort([5, 4, 3, 2, 1]);
console.log(res);
