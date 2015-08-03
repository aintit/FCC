function destroyer() {
  // Remove all the values
  var arr = arguments[0];
  console.log(arr);
  var args = Array.prototype.slice.call(arguments, 1);
  for (i = 0; i < arr.length; i++) {
    console.log(i);
    if (args.indexOf(arr[i]) != -1) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(args);
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

