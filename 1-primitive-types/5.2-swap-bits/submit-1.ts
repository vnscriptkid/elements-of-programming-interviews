// A 64-bit integer can be viewed as an array of 64 bits, with the bit at index 0 corresponding to the least significant bit (LSB),
// and the bit at index 63 corresponding to the most significant bit (MSB).
// Implement code that takes as input a 64-bit integer and swaps the bits at indices i and y. Figure 5.1 illustrates bit swapping for an 8-bit integer.

export function swapBits(x: number, i: number, j: number) {
  const bitAtI = (x >> i) & 1;
  const bitAtJ = (x >> j) & 1;

  if (bitAtI === bitAtJ) return x;

  const swapper = (1 << i) | (1 << j);
  return x ^ swapper;
}
