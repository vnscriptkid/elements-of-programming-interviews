function fibonacciGood(n: number, cache: Record<string, number> = {}): number {
  if (n in cache) return cache[n];

  if (n <= 1) return n;

  cache[n] = fibonacciGood(n - 1, cache) + fibonacciGood(n - 2, cache);

  return cache[n];
}

function fibonacciBest(n: number): number {
  if (n <= 1) return n;

  let prev = 1,
    prevOfPrev = 0;
  let cur = 0;
  for (let i = 2; i <= n; i++) {
    cur = prev + prevOfPrev;

    prevOfPrev = prev;
    prev = cur;
  }
  return cur;
}

// O(N^2)
function maxSubarraySum(arr: number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let curSum = 0;
    for (let j = i; j < arr.length; j++) {
      curSum += arr[j];
      max = Math.max(max, curSum);
    }
  }
  return max;
}

// Time: O(N), Space: O(N)
function maxSubarraySumGood(arr: number[]): number {
  // max ending at curIdx
  const buffer = Array(arr.length);

  buffer[0] = arr[0];

  arr.forEach((num, idx) => {
    if (idx === 0) return;

    buffer[idx] = Math.max(num, num + buffer[idx - 1]);
  });

  return Math.max(...buffer);
}

// Time: O(N), Space: O(1)
function maxSubarraySumBest(arr: number[]): number {
  // max ending at curIdx

  let maxEndingHere = arr[0];
  let globalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], arr[i] + maxEndingHere);
    globalMax = Math.max(globalMax, maxEndingHere);
  }

  return globalMax;
}

export {
  fibonacciBest,
  fibonacciGood,
  maxSubarraySum,
  maxSubarraySumGood,
  maxSubarraySumBest,
};
