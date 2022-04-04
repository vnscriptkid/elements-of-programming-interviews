function makeChange(cents: number) {
  const coins = [30, 24, 12, 6, 3, 1];

  let minNumOfCoins = 0;

  let curIdx = 0;

  while (cents && curIdx < coins.length) {
    if (cents >= coins[curIdx]) {
      minNumOfCoins += ~~(cents / coins[curIdx]);
      cents %= coins[curIdx];
    }
    curIdx++;
  }

  return minNumOfCoins;
}

export { makeChange };
