// COMPUTE THE LEVENSHTEIN DISTANCE

// Spell checkers make suggestions for misspelled words.
// Given a misspelled string, a spell checker should return words in the dictionary which are close to the misspelled string.

// In 1965, Vladimir Levenshtein defined the distance between two words as the minimum number of "edits"
// it would take to transform the misspelled word into a correct word, where a single edit is
// the insertion, deletion, or substitution of a single character. For example,
// the Levenshtein distance between "Saturday" and "Sundays" is 4—delete
// the first 'a' and 't', substitute V by 'n' and insert the trailing 's'.

// Write a program that takes two strings and computes the minimum number of edits
// needed to transform the first string into the second string.

export function levenshteinDistance(a: string, b: string): number {
  const srcLength = a.length;
  const destLength = b.length;

  const dp = Array(srcLength + 1)
    .fill(null)
    .map(() => Array(destLength + 1).fill(0));

  // first row
  for (let c = 0; c <= destLength; c++) dp[0][c] = c;

  // first col
  for (let r = 0; r <= srcLength; r++) dp[r][0] = r;

  for (let r = 1; r <= srcLength; r++) {
    for (let c = 1; c <= destLength; c++) {
      let e1 = dp[r - 1][c - 1];

      if (a[r - 1] !== b[c - 1]) e1 += 1;

      let e2 = dp[r - 1][c] + 1;
      let e3 = dp[r][c - 1] + 1;

      dp[r][c] = Math.min(e1, e2, e3);
    }
  }

  return dp[srcLength][destLength];
}
