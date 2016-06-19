// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  var distance = Math.abs(X - Y);
  var result = distance / D;
  var resultRounded = Math.round(distance / D);
  if (result > resultRounded) {
    return resultRounded + 1;
  } else {
    return Math.round(Math.abs(distance / D));
  }
}
solution(5, 105, 3);
solution(1, 5, 2);
solution(10, 85, 30);
