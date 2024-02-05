const isPrime = (n) => {
  // Corner case
  if (n <= 1) {
    return false;
  }
  // Check from 2 to n-1
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const primeStatus = isPrime(7) ? "prime number" : "Not a prime number";

console.log(primeStatus);

// Output : prime number
