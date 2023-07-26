const palindromes = function (str) {
  let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let stringLength = newStr.length - 1;
  for (let i = 0; i < newStr.length / 2; i++) {
    let character = newStr[i];
    if (character !== newStr[stringLength]) {
      return false;
    } else {
      stringLength--;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
