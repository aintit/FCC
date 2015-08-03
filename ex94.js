function largestOfFour(arr) {
  // You can do this!
  var largest = [];
  var counter;
  for (i = 0; i < 4; i++) {
    counter = 0;
    for (j = 0; j < 4; j++) {
      if (arr[i][j] > counter) {
        counter = arr[i][j];
      }
    }
    largest[i] = counter;
  }
  return largest;
}

