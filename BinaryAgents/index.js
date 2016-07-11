function binaryAgent(str) {
  var binaries = str.split(" ");
  var result = "";
  function binaryToDecimal(number) {
    return parseInt(number,2);
  }
  function decimalToChar(number) {
    return String.fromCharCode(number);
  }
  for (var i = 0; i < binaries.length; i++) {
    result+= decimalToChar(binaryToDecimal(binaries[i]));
  }
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
