export default class PubSub {
  constructor() {
    this.handles = {}
  }

  /**
   * 注册事件监听器
   * @param {string} type
   * @param {()=> any} listener
   */
  addListener(type, listener) {
    if (!(type in this.handles)) {
      this.handles[type] = []
    }
    this.handles[type].push(listener)
  }

  removeListener(type) {
    const length = this.handles[type].length
    if (length === 1) {
      delete this.handles[type]
    }
  }

  /**
   * 触发事件
   * @param {string} type 事件类型
   */
  emit(type) {
    // 除去第一个参数外其余参数都是传入的参数
    const args = [...arguments].slice(1)
    const eventList = this.handles[type]

    for (const item of eventList) {
      item.apply(this, args)
    }
  }
}
