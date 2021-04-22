/**
 * 快速排序法
 */
var count = 0;
function quickSort2(array) {
  if (array.length <= 1) {
    return array;
  } else {
    // 选取中心轴
    const pivotIndex = Math.floor(array.length / 2);
    // 中心值
    const pivot = array[pivotIndex];
    console.log('pivot:', pivot);
    // 定义左右两个数组
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
      count++;
      if (array[i] < pivot) {
        // < 中心轴的放左边
        left.push(array[i]);
        console.log('left:', left);
      } else if (i === pivotIndex) {
        continue;
      } else {
        // > 中心轴的放右边
        right.push(array[i]);
        console.log('right:', right);
      }
    }
    // 递归调用,直到左右两个数组都只有一个元素
    // 将左右数组和中心轴连结起来
    return quickSort2(left).concat([pivot], quickSort2(right));
  }
}

let res = quickSort2([16, 97, 9, 17, 1, 8]);
console.log(res);
console.log('count:', count);
