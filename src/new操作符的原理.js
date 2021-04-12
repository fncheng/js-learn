function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var objFactory = function () {
  let obj = new Object();
  // 获取实参的第一个值
  // 等效于 arguments.shift()
  Constructor = [].shift.call(arguments); // arguments  实参 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments
  // arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性。例如，它没有 pop 方法。但是它可以被转换为一个真正的Array
  obj.__proto__ = Constructor.prototype;
  // 修改Constructor(这里是指Person)里的this指向obj
  // 所以obj.name = 'seven'
  // 这里argiments第一个值已经被shift() 了
  var ret = Constructor.apply(obj, arguments);
  console.log(ret);
  // var ret = Person.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
};
// let a = new Person('seven');
var a = objFactory(Person, 'seven');
console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);
