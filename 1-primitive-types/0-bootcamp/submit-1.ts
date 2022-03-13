export function countSetBits(num: number) {
  let numOfSetBits = 0;

  while (num !== 0) {
    numOfSetBits += 1 & num;
    num = num >> 1;
  }

  return numOfSetBits;
}
