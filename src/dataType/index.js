function typeCheck(val) {
  return Object.prototype.toString.call(val);
}
module.exports = typeCheck;
