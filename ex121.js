function steamroller(arr) {
  // I'm a steamroller, baby
  function flatten(arr) {
    console.log("arr: " + arr);
    var flat = [];
    if (arr.length === 0) {
      return flat;
    }
    console.log("arr length = " + arr.length);
    for (var i = 0; i < arr.length; i++) {
      console.log("for loop arr length = " + arr.length);
      console.log("i: " + i);
      console.log("  arr: " + arr);
      console.log("  flat: " + flat);
      if (Array.isArray(arr[i])) {
        flat = flat.concat(flatten(arr[i]));
        console.log("arr: " + arr);
      } else {
        flat.push(arr[i]);
      }
    }
    console.log("flat: " + flat);
    return flat;
  }
  return flatten(arr);
}

console.log(steamroller([1, [2], [3, [[4]]]]));
console.log(steamroller([[['a']], [['b']]]));
