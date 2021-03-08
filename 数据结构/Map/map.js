let myMap = new Map();
let keyObj = {};
let keyFunc = function () {};
let keyString = 'a string';

// add key
myMap.set(keyString, '字符串键');
myMap.set(keyFunc, '函数键');
myMap.set(keyObj, '对象键');

console.log(myMap.constructor);
