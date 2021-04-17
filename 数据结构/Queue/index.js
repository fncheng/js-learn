class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // add element
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // remove
  dequeue() {
    delete this.items[this.lowestCount++];
  }
  // get the first
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return Object.keys(this.items).length === 0;
  }
  size() {
    return Object.keys(this.items).length;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    // return Object.values(this.items).toString();
    let objString = this.items[this.lowestCount];
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      console.log(this.items[i]);
      objString += ',' + this.items[i];
    }
    return objString;
  }
}

let q = new Queue();
console.log(q.isEmpty());
q.enqueue(1);
q.enqueue('1231231');
console.log(q.items);
