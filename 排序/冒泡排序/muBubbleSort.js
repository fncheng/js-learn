function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (compareFn(array[j], array[j + 1])) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
let defaultCompare = function (a, b) {
  return a > b ? true : false;
};
let res = bubbleSort([3, 2, 8, 5, 6, 1]);
console.log(res);
