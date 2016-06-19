// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var n = A.length + 1;
  var sum = n * (n + 1) / 2;
  var arrSum = 0;
  for (var i = 0; i < A.length; i++) {
    arrSum += A[i];
  }
  return sum - arrSum;
}
solution([2, 3, 1, 5]);
