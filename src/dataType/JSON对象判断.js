function myToString(val) {
  return Object.prototype.toString.call(val);
}
function isJSON(val) {
  if (!val) {
    return false;
  }
  try {
    myToString(JSON.parse(val));
    return true;
  } catch (error) {
    return false;
  }
}
const obj = {
  name: 'zs',
  age: 18,
  sex: 'male',
};
console.log(isJSON(null));
