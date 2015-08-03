function chunk(arr, size) {
  // Break it up.
  arr2 = [];
  for (i = 0; i < arr.length / size; i++) {
    arr2[i] = [];
    for (j = 0; j < size; j++) {
      if (i * size + j === arr.length) {
        break;
      } else {
        arr2[i][j] = arr[i * size + j];
      }
    }
  }
  return arr2;
}

chunk(['a', 'b', 'c', 'd'], 2);

