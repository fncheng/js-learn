/**
 * 快速排序
 * 首先调用quick递归函数，传入要排序的数组
 * @param {Array} originalArray 要排序的数组
 * @param {Function} compareFn 比较函数
 */
function quickSort(originalArray, compareFn = defaultCompare) {
  // Clone original array to prevent it from modification
  const array = [...originalArray];
  return quick(array, 0, array.length - 1, compareFn);
}
/**
 *
 * @param {Array} array 要分割的数组
 * @param {Number} left 数组最左边的值的下标
 * @param {Number} right 数组最右边的值的下标
 * @param {Function} compareFn 比较函数
 */
function quick(array, left, right, compareFn) {
  let index;
  if (array.length <= 1) {
    return array;
  } else {
    // 分割array为左右两块,并返回中间值的下标
    index = partition(array, left, right, compareFn);
    console.log('中心轴的坐标index:', index);
    // 如果左边的下标比轴值小
    // 这是不能是index-1的原因是 index-1已经是枢轴index前的最后一个值了
    if (left < index - 1) {
      // 继续递归分割left 为[0,left-1] [left+1,index-1] 两部分
      // 为什么是index-1, 因为 index是枢轴，已经确定它的最终位置了
      console.log('继续分割左边');
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      console.log('继续分割右边');
      quick(array, index, right, compareFn);
    }
    return array;
  }
}
function partition(array, left, right, compareFn) {
  // 确定中间枢轴的值
  const pivot = array[Math.floor((left + right) / 2)];
  console.log('中心轴的值pivot:', pivot);
  let i = left;
  let j = right;
  let count = 0;
  console.log('i,j:', i, j);
  console.log('交换前的数组:', array);
  // i>=j时停止
  while (i <= j) {
    // 左边的值 > pivot枢轴的值时停止
    console.log('before i,j:', i, j);
    while (array[i] < pivot) {
      i++;
      count++;
      console.log('i:', i);
    }
    while (array[j] > pivot) {
      j--;
      count++;
    }
    // 当左边的值比中心轴大，右边的值比中心轴小
    // 交换2个值并使左边的坐标向右移动1，右边的坐标向左移动1
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
    console.log('交换后:', array);
  }
  console.log('选取一次中间轴后:', array, i);
  console.log('count:', count);
  return i;
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

let res = quickSort([16, 97, 9, 17, 1, 8]);
console.log(res);
