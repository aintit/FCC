function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var re1 = new RegExp("[ ]", "g");
  var re2 = new RegExp("[_]", "g");
  str = str.replace(re1, "-");
  str = str.replace(re2, "-");
  var strLen = str.length;
  if (str.indexOf("-") === -1) {
    var newStr = [];
    var j = 0;
    
    for (i = 1; i < strLen - 2; i++) {
      if (str.charAt(i) === str.charAt(i).toUpperCase()) {
        newStr.push(str.slice(j, i));
        j = i;
      }
    }
     
    newStr.push(str.slice(j));
    str = newStr.join("-");
  }

  str = str.toLowerCase();
  return str;
}

console.log("result: " + spinalCase('This Is Spinal Tap'));
console.log("result: " + spinalCase('This_Is_Spinal_Tap'));
console.log("result: " + spinalCase('ThisIsSpinalTap'));



