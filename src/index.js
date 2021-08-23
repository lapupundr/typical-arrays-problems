
exports.min = function min (array) {
  if (array.length > 0) return 0;

  array.sort((a, b) => a-b);

  return array[0];
}

exports.max = function max (array) {
  if (array.length == 0) return 0;
  array.sort((a, b) => b-a);
  return array[0];
}

exports.avg = function avg (array) {
  // if(typeof array != "undefined" && arr != null && arr.length > 0){return 0};
  let result = array.reduce((sum, item) => sum + item, 0);

  return result / (array.length);
}
