function drop(arr, func) {
  // Drop them elements.
  arr = arr.filter(func);
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });

