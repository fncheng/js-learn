function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);
    console.log(left, right);
    array = merge(left, right, compareFn);
  }
  return array;
}
function merge(left, right, compareFn) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
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
let res = mergeSort([5, 4, 3, 2, 1]);
console.log(res);
