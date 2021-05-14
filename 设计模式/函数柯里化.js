function curry(f) {
  return function (a) {
    console.log('a', a);
    return function (b) {
      console.log('b', b);
      return f(a, b);
    };
  };
}

function sum(num1, num2) {
  return num1 + num2;
}

let sumCurry = curry(sum);
console.log(sumCurry(1)(2));
