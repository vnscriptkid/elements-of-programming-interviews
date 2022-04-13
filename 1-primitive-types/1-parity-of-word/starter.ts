// COMPUTING THE PARITY OF A WORD

// The parity of a binary word is 1 if the number of Is in the word is odd;
// otherwise, it is 0. For example, the parity of 1011 is 1, and the parity of 10001000 is 0.
// Parity checks are used to detect single bit errors in data storage and communication.
// It is fairly straightforward to write code that computes the parity of a single 64-bit word.

export function parity(x: number): 0 | 1 {
  let countOnes = 0;

  while (x !== 0) {
    countOnes += x & 1;

    x = x >> 1;
  }

  return countOnes % 2 === 1 ? 1 : 0;
}
