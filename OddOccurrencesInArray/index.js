// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  A.sort(function(a, b) {
    return a - b;
  });
  // A.sort();
  console.log(A);
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      A.splice(A.indexOf(A[i]), 2);
      i--;
    }
  }
  console.log(A[0]);
  return A[0];
}

solution([9, 3, 9, 3, 9, 7, 9]);
