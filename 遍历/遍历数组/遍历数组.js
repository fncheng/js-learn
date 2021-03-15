const arr = [1, 3, 5, 7, , 9];
arr.name = 'zs';
console.log(arr);
// for...in... 会跳过空元素，以及会识别出非数字元素
// ⚠️: 因此for...in 尽量不要用来遍历数组
// for (const item in arr) {
//   console.log(arr[item]);
// }

// for...of 会识别空元素为undefined， 不会识别出非数字元素
// for (const item of arr) {
//   console.log(item);
// }
