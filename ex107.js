function convert(num) {
  var str = "";
  var tens = Math.floor(num / 10);
  switch(tens) {
    case 9:
      str += "XC";
      break;
    case 8:
      str += "LXXX";
      break;
    case 7:
      str += "LXX";
      break;
    case 6:
      str += "LX";
      break;
    case 5:
      str += "L";
      break;
    case 4:
      str += "XL";
      break;
    case 3:
      str += "XXX";
      break;
    case 2:
      str += "XX";
      break;
    case 1:
      str += "X";
      break;
    default:
      break;
  }
  var ones = num % 10;
  switch(ones) {
    case 9:
      str += "IX";
      break;
    case 8:
      str += "VIII";
      break;
    case 7:
      str += "VII";
      break;
    case 6:
      str += "VI";
      break;
    case 5:
      str += "V";
      break;
    case 4:
      str += "IV";
      break;
    case 3:
      str += "III";
      break;
    case 2:
      str += "II";
      break;
    case 1:
      str += "I";
      break;
    default:
      break;
  }
  return str;
}

console.log(convert(36));
