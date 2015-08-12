function convert(str) {
  var strArray = str.split("");
  var resultStr = "";
  // &colon;&rpar;
  var char;
  for (i = 0; i < strArray.length; i++) {
    char = strArray[i];
    switch (char) {
      case "&":
        resultStr += "&amp;";
        break;
      case "<":
        resultStr += "&lt;";
        break;
      case ">":
        resultStr += "&gt;";
        break;
      case '"':
        resultStr += "&quot;";
        break;
      case "'":
        resultStr += "&apos;";
        break;
      default:
        resultStr += char;
        break;        
    }
  }
  return resultStr;
}

convert('Dolce & Gabbana');

