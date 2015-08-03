function replace(str, before, after) {
  var re = new RegExp(before, "g");
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(re, after);
  return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

