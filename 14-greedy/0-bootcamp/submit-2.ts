// coins take values [30, 24, 12, 6, 3, 1] cents
// making change results in the minimum number of coins

export function makeChange(cents: number) {
  const COINS: number[] = [30, 24, 12, 6, 3, 1];

  let count = 0;

  for (let coin of COINS) {
    while (cents / coin >= 1) {
      let localCount = ~~(cents / coin);

      count += localCount;

      cents -= localCount * coin;
    }
  }

  return count;
}
