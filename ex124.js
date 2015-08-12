var isNested = false;
var firstVariable = 0;

function add() {
  for (i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      return undefined;
    }
  }
  if (arguments.length === 1 && !isNested) {
    firstVariable = arguments[0];
    isNested = true;
    var sumAnd = function(secondVar) {
      if (typeof secondVar !== "number") {
        return undefined;
      }
      return firstVariable + secondVar;
    };
    return sumAnd;
  } else if (arguments.length === 1 && isNested) {
    return arguments.length + firstVariable;
  }
  else if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return undefined;
    }
}

add(2,3);

