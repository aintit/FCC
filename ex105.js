function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;
  for (i = min; i <= max; i++) {
    sum += i;         
  }
  return sum;
}

sumAll([1, 4]);
sumAll([10, 5]);
sumAll([5, 10]);

