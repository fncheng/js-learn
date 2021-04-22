class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) this.lowestCount--;
    this.items[this.lowestCount] = element;
  }
  addBack(element) {
    this.items[this.count++] = element;
  }
  removeFront(element) {}
  removeBack(element) {}
  peekFront(element) {}
  peekBack(element) {}
  isEmpty() {
    return Object.keys(this.items).length === 0;
  }
}

const deque = new Deque();
console.log(deque.isEmpty);
