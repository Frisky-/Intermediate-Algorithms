// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  if (A.length === 0) {
    return A;
  }
  for (var i = 0; i < K; i++) {
    var lastElement = A.pop();
    A.unshift(lastElement);
  }
  console.log(A);
}

solution([3, 8, 9, 7, 6], 3);
