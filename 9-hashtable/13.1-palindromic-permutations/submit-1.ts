// TEST FOR PALINDROMIC PERMUTATIONS

// A palindrome is a string that reads the same forwards and backwards, e.g., "level", "rotator", and "foobaraboof".
// Write a program to test whether the letters forming a string can be permuted to form a palindrome. For example, "edified" can be permuted to form "deified".

export function canFormPalindrome(str: string): boolean {
  const freq: any = {};

  for (let char of str) {
    if (!(char in freq)) freq[char] = 0;
    freq[char]++;
  }

  const isOdd: any = (num: number): boolean => num % 2 === 1;

  const oddCount = Object.values(freq)
    .map(isOdd)
    .filter((x) => !!x).length;

  return oddCount <= 1;
}
