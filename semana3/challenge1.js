function countPrimes(number) {
  //Implementación
  let primes = 1;
  if (number <= 1) return 0;
  else if (number === 2) {
    return primes;
  }

  for (let i = 3; i <= number; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes += 1;
    } else {
      isPrime = true;
    }
  }

  return primes;
}
console.log(countPrimes(10));
module.exports = countPrimes;
