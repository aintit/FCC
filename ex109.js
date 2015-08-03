function translate(str) {
  var strSplit = str.split();
  function isVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      return true;
    }
    return false;
  }
  for (i = 0; i < strSplit.length; i++) {
    firstLetter = strSplit[i].charAt(0);
    if (isVowel(firstLetter)) {
      strSplit[i] = strSplit + "way";
    } else if (!isVowel(strSplit[i].charAt(1))) {
      strSplit[i] = strSplit[i].substr(2) + strSplit[i].substr(0, 2) + "ay";
    } else {
      strSplit[i] = strSplit[i].substr(1) + firstLetter + "ay";
    }
  }
  var strJoin = strSplit.join(" ");
  return strJoin;
}

translate("consonant");

