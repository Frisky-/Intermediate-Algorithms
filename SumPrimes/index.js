function sumPrimes(num) {
  var sum = 0;
  function checkPrime(number) {
    if(number < 2){
      return false;
    }
    for (var i = 2; i < number; i++) {
      if(number % i === 0){
        return false;
      }
    }
    return true;
  }
  for (var i = 0; i <= num; i++) {
    if(checkPrime(i)){
      sum+=i;
    }
  }
  console.log(sum);
}

sumPrimes(977);
