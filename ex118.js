function smallestCommons(arr) {
  
  function LCM(arr) {
    var product = 1;
    for (i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    console.log(product);
    var isLCM = false;
    for (j = 1; j < product; j++) {
      isLCM = true;
      for (k = 0; k < arr.length; k++) {
        console.log("j: " + j + " arr[k]: " + arr[k] + " j%arr[k]===0:" + (j%arr[k] === 0));
        if (j%arr[k] === 0) {
          isLCM = isLCM && true;
        } else {
          isLCM = false;
        }
      }
     
    if (isLCM) {
    console.log(j);
    return j;
     }
   }
   console.log(product);
   return product;
  }
  
  var lower = 0;
  var higher = 0;
  if (arr[1] > arr[0]) {
    lower = arr[0];
    higher = arr[1];
  } else {
    lower = arr[1];
    higher = arr[0];
  }
  rangeArr = [];
  for (var l = lower; l <= higher; l++) {
    rangeArr.push(l);
  }
  console.log(rangeArr);
  return LCM(rangeArr);
}


console.log(smallestCommons([1,5]));

