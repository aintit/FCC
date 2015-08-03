function pair(str) {
  var strArray = str.split("");
  var pairs = [];
  var current = "";
  for (i = 0; i < strArray.length; i++) {
    current = strArray[i];
    switch(current) {
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
        break;
      case "C":
        pairs.push(["C", "G"]);
        break;
      case "G":
        pairs.push(["G", "C"]);
        break;
      default:
        break;
    }
  }
 return pairs;
}

pair("GCG");

