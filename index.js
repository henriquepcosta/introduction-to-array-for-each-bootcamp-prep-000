function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random()*10);
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
