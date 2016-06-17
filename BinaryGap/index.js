// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 4.0.0)
  var binaryN = (N >>> 0).toString(2);
  var longestGap = 0;
  var tempGap = 0;
  // console.log(binaryN);
  var j = 1;
  while (binaryN[binaryN.length - j] === "0") {
    binaryN = binaryN.slice(0, binaryN.length - j);
  }
  for (var i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === "0") {
      tempGap++;
      if (tempGap > longestGap) {
        longestGap = tempGap;
      }
    } else {
      tempGap = 0;
    }
  }
  // console.log(longestGap);
  return longestGap;
}

solution(51712);
