function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var isTrue = function(value) {
    return true && value;
  };
  arr = arr.filter(isTrue);
  return arr;
}

bouncer([7, 'ate', '', false, 9]);

