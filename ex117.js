function sumPrimes(num) {

  function isPrime(n) {
    if (n === 2 || n === 3) {
      return true;
    }
    for (var i = 2; i < Math.sqrt(n)+1; i++) {
      if (n%i === 0) {
        return false;
      }
    }
    return true;
  }

  var sum = 0;
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(10));

