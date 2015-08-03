function repeat(str, num) {
  // repeat after me
  var resultStr = "";
  if (num < 0) {
    return "";
  } else {
    for (i = 0; i < num; i++) {
      resultStr += str;  
    }
    return resultStr;
  }
}

repeat('abc', 3);

