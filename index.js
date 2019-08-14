// Add your functions here
function map(array, fn){
  let result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(fn(array[i]));
  }
  return result;
}

function reduce(array, fn, start){
  let total = (!!start) ? start : array[0];
  let i = (!!start) ? 0 : 1;
  for (; i < array.length; i++) {
    total = fn(array[i], total);
  }
  return total;
}
