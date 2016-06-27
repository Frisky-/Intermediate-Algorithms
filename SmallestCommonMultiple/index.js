function smallestCommons(arr) {
  var min = Math.min.apply(Math, arr)
  var max = Math.max.apply(Math, arr);
  var array = [];
  for (var i = min; i <= max; i++) {
    array.push(i)
  }
  var check = true;
  var common = 60;
  while(check){
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if(common % array[i] === 0){
        count++;
        if(count === array.length){
          console.log(common);
          check=false;
        }
      }
    }
    common++;
  }
  return common;
}


smallestCommons([1, 5]);
smallestCommons([5, 1]);
smallestCommons([1, 13]);
