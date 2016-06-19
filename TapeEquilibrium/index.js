// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var firstPart = A[0];
  A.shift();
  var secondPart = 0;
  A.filter(function(val) {
    secondPart += val;
  });
  var result = Math.abs(firstPart - secondPart);
  for (var i = 0; i < A.length - 1; i++) {
    firstPart += A[i];
    secondPart -= A[i];
    if (Math.abs(firstPart - secondPart) < result) {
      result = Math.abs(firstPart - secondPart);
    }
  }
  return result
}
solution([3, 1, 2, 4, 3]);
