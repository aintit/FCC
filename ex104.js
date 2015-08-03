function where(arr, num) {
  // Find my place in this sorted array.
  if (num < arr[0]) {
    return 0;
  } else if (num > arr[0] && num <= arr[arr.length - 1]) {
    for (i = 1; i < arr[arr.length - 2]; i++) {
      if (num > arr[i] && num <= arr[i + 1]) {
        return i + 1;
      }
    }
  } else {
    return arr[length] - 1;
  }
}

where([40, 60], 50);

