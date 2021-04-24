const _ = require('lodash');
const arr = [
  { prop: 'date', label: '日期', show: true },
  { prop: 'name', label: '姓名', show: true },
  { prop: 'address', label: '地址', show: false },
];
// console.log(arr.filter((value, index, arr) => value.show));
// console.log(_.filter(arr, (value) => value.show));

Array.prototype.myFilter = function (predicate) {
  let index = -1,
    resIndex = 0,
    result = [];
  while (++index < this.length) {
    let value = this[index];
    if (predicate(value, index, this)) {
      result[resIndex++] = value;
    }
  }
  return result;
};
console.log(arr.myFilter((value) => value.show));
