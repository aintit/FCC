function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for (i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  str = str.join(" ");
  return str;
}

titleCase("I'm a little tea pot");

