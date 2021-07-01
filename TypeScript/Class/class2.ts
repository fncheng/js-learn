class Animal {
  // public name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): void {
    console.log(`My name is ${this.name}`);
  }
  // 只设置get 表明这是一个只读属性
  get name() {
    return 'getter';
  }
  // 要想操作数据，必须设置set
  set name(val: string) {
    // return 'setter' + val;
    console.log('setter ' + val);
  }
}

let a = new Animal('dog');
a.name;
console.log('a.name: ', a.name);

// a.name = '123';

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   sayHi(): void {
//     console.log(`cat ${super.sayHi()}`);
//   }
// }
