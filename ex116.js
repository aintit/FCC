function sumFibs(num) {
  function fib(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    else {
      return fib(n-1) + fib(n-2);
    }
  }
  var sum = 0;
  var n = 0;
  while (fib(n) <= num) {
    if (fib(n) % 2 === 1) {
      sum += fib(n);
      }
    n++;
    
  }
  return sum;
}

sumFibs(4);

