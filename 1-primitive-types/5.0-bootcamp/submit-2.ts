export function countSetBits(num: number) {
  let count = 0;
  while (num > 0) {
    count += num & 1;

    num = num >> 1;
  }

  return count;
}
