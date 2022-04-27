// COMPUTE THE BINOMIAL COEFFICIENTS

// Design an efficient algorithm for computing (n,k) which has the property
// that it never overflows if the final result fits in the integer word size.

// choose 3 out of 4 {1,2,3,4}

// with 4, consider {1,2,3}, choose 2 out of 3 => 3 ways: {1,2}, {1,3}, {2,3} => {1,2,4},{1,3,4},{2,3,4}

// without 4: choose 3 out of 3 {1,2,3} => 1 way: {1,2,3}

export function computeBinomialCoefficient(n: number, k: number) {
  return choosekFromN(n, k);
}

function choosekFromN(n: number, k: number, cache: any = {}): number {
  const cacheKey = String([n, k]);

  if (!(cacheKey in cache)) {
    if (k === 0 || n === k) return 1;

    const withX = choosekFromN(n - 1, k - 1);

    const withoutX = choosekFromN(n - 1, k);

    cache[cacheKey] = withX + withoutX;
  }

  return cache[cacheKey];
}
