// ENUMERATE ALL PRIMES TO n

// A natural number is called a prime if it is bigger than 1 and has no divisors other than 1 and itself.
// Write a program that takes an integer argument and returns all the primes between 1 and thatinteger.
// Forexample,if the input is 18,you should return (2,3,5,7,11,13,17).

export function generatePrimes(n: number): number[] {
  const primes: boolean[] = Array(n + 1).fill(true);

  primes[0] = false;
  primes[1] = false;
  const result: number[] = [];

  for (let i = 2; i <= n; i++) {
    if (primes[i] === false) continue; // has been weed out

    if (isPrime(i)) {
      result.push(i);
      weedOutMultiples(i, primes);
    } else primes[i] = false;
  }

  return result;
}
function isPrime(x: number) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }

  return true;
}
function weedOutMultiples(x: number, primes: boolean[]) {
  // [ 0 1 2 3 4 5 ]
  // [ F F T T(F)T ]
  //       ^
  for (let i = x + 1; i < primes.length; i++) {
    if (i % x === 0) primes[i] = false;
  }
}
