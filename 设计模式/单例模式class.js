class ContextMenu {
  constructor(options) {
    this.options = options
  }
  instance;
  createMenu() {
    // ...
    return { name: 'createMenu' }
  }
  getInstance() {
    if (!this.instance) { this.instance = this.createMenu() }
    return this.instance
  }
}

const a = new ContextMenu()
console.log(a.getInstance());