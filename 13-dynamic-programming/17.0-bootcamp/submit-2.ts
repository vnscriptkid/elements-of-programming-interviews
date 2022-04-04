// recursion with cache
export function fibonacciGood(
  x: number,
  cache: Record<string, number> = {}
): number {
  if (!(x in cache)) {
    if (x < 2) return x;

    cache[x] = fibonacciGood(x - 1) + fibonacciGood(x - 2);
  }

  return cache[x];
}

// loop with reusable vars
export function fibonacciBest(x: number) {
  if (x < 2) return x;

  let prevOfPrev = 0,
    prev = 1;
  let cur = 0;

  for (let i = 2; i <= x; i++) {
    cur = prevOfPrev + prev;

    prevOfPrev = prev;
    prev = cur;
  }

  return cur;
}

export function maxSubarraySum(arr: number[]) {
  let globalMax = 0;

  for (let i = 0; i < arr.length; i++) {
    // curSums holds sum of subarrays starting at i
    let curSum = 0;

    for (let j = i; j < arr.length; j++) {
      curSum += arr[j];

      globalMax = Math.max(globalMax, curSum);
    }
  }

  return globalMax;
}

export function maxSubarraySumGood(arr: number[]) {
  const dp: number[] = Array(arr.length).fill(null);

  dp[0] = arr[0];

  for (let i = 1; i < dp.length; i++) {
    dp[i] = Math.max(arr[i], arr[i] + dp[i - 1]);
  }

  return Math.max(...dp);
}

export function maxSubarraySumBest(arr: number[]) {
  let prev = arr[0];
  let globalMax = arr[0];
  let cur = 0;

  for (let i = 1; i < arr.length; i++) {
    cur = Math.max(arr[i], arr[i] + prev);

    globalMax = Math.max(cur, globalMax);
    prev = cur;
  }

  return globalMax;
}
