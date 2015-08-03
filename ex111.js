function fearNotLetter(str) {
  var charCode = str.charCodeAt(0);
  for (i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - charCode != 1) {
      var returnCode = str.charCodeAt(i) - 1;
      return String.fromCharCode(returnCode);
    }
    charCode = str.charCodeAt(i);
  }
  return undefined;
}

fearNotLetter('abce');

