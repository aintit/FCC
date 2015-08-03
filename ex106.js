function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  if (arr1 === arr2) {
   return newArr;
  } 
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
      }
    }
  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  } 
  return newArr;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]));

