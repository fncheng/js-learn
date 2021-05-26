/**
 * 单例模式
 * @param {*} options 
 * @returns instance
 */
const ContextMenu = function (options) {
  let instance;
  function createMenu() {
    // ...
    return { name: 'createMenu' }
  }
  return {
    getInstance() {
      if (!instance) {
        instance = createMenu()
      }
      return instance
    }
  }
}
const a = ContextMenu()
console.log(a.getInstance());