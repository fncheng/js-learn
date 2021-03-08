/**
 * 基于对象的Stack类
 */
class Stack {
  constructor(count, items) {
    this.count = count;
    this.items = items;
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  //从栈中弹出元素，即删除最后一个元素,并返回该元素
  pop() {
    if (this.isEmpty()) {
      //验证是否为空
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count--];
    return result;
  }
  // 查看栈顶的值
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  // clear the Stack
  clear() {
    this.items = {};
    this.count = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    return JSON.stringify(this.items);
  }
}

let stack = new Stack(2, { 0: '1', 1: '2' });
console.log(Object.prototype.toString.call(stack.toString()));
