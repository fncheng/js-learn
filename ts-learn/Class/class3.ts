/**
 * 类的访问修饰符：public private protected
 */
class Animal {
  protected name: string;
  // 当构造函数修饰为 protected 时，该类只允许被继承：
  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
let a = new Animal('cat');
// console.log(a.name);
a.sayHi();

// 抽象类不允许被实例化
