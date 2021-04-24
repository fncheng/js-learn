class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): void {
    console.log(`My name is ${this.name}`);
  }
}

let a = new Animal('dog');

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  sayHi(): void {
    console.log(`cat ${super.sayHi()}`);
  }
}
