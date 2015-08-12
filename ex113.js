function unite(arr1, arr2, arr3) {
  var resultArr = arr1.concat(arr2, arr3);
  var j;
  for (i = 0; i < resultArr.length; i++) {
    j = resultArr[i];
    if (resultArr.lastIndexOf(j) != i) {
      resultArr.splice(resultArr.lastIndexOf(j), 1);
      i--;
    }
  }
  return resultArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);

