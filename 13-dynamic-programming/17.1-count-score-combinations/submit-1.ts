// COUNT THE NUMBER OF SCORE COMBINATIONS

// In an American football game, a play can lead to 2 points (safety), 3 points (field goal), or 7 points (touchdown, assuming the extra point).
// Many different combinations of 2, 3, and 7 point plays can make up a final score.
// For example, four combinations of plays yield a score of 12:
// • 6 safeties (2x6 =12),
// • 3 safeties and 2 field goals (2x3 + 3x2 =12),
// • 1 safety,1 field goal and 1 touch down (2x1 + 3x1 + 7x1=12)
// • 4 field goals (3x4 =12).
// Write a program that takes a final score and scores for individual plays, and returns the number of combinations of plays that result in the final score.

export function numCombinationsForFinalScore(
  finalStore: number,
  individualPlayScores: number[]
) {
  const n = individualPlayScores.length;
  const dp = Array(n)
    .fill(null)
    .map(() => Array(finalStore + 1).fill(0));

  // first col
  for (let row of dp) row[0] = 1;

  // first row
  for (let s = 1; s <= finalStore; s++) {
    if (s % individualPlayScores[0] === 0) dp[0][s] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= finalStore; s++) {
      const withoutCur = dp[i - 1][s];

      let withCur = 0;
      if (s >= individualPlayScores[i]) {
        withCur = dp[i][s - individualPlayScores[i]];
      }

      dp[i][s] = withoutCur + withCur;
    }
  }

  return dp[n - 1][finalStore];
}
