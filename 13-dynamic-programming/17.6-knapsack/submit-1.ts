// THE KNAPSACK PROBLEM

// A thief breaks into a clock store.
// Each clock has a weight and a value, which are known to the thief.
// His knapsack cannot hold more than a specified combined weight.
// His intention is to take clocks whose total value is maximum subject to the knapsack's weight constraint.

// His problem is illustrated in Figure 17.8 on the next page.
// If the knapsack can hold at most 130 ounces, he cannot take all the clocks.
// If he greedily chooses clocks, in decreasing order of value-to-weight ratio,
// he will choose P, H, O, B, I, and L in that order for a total value of $669.
// However, {H,/, O) is the optimum selection, yielding a total value of $695.

// Write a program for the knapsack problem that selects a subset of items
// that has maximum value and satisfies the weight constraint.
// All items have integer weights and values. Return the value of the subset.

export class Item {
  weight: number;
  value: number;

  constructor(weight: number, value: number) {
    this.weight = weight;
    this.value = value;
  }
}

export function optimumSubjectToCapacity(
  items: Item[],
  capacity: number
): number {
  const numOfRows = items.length;
  const numOfCols = capacity + 1;

  const dp: number[][] = Array(numOfRows)
    .fill(null)
    .map(() => Array(numOfCols).fill(0));

  // first row
  for (let c = 1; c <= capacity; c++) {
    if (c >= items[0].weight) dp[0][c] = items[0].value;
  }

  for (let i = 1; i < numOfRows; i++) {
    for (let c = 1; c <= capacity; c++) {
      const v1 = dp[i - 1][c];

      let v2 = 0;
      if (c >= items[i].weight) {
        v2 = items[i].value + dp[i - 1][c - items[i].weight];
      }

      dp[i][c] = Math.max(v1, v2);
    }
  }

  return dp[numOfRows - 1][capacity];
}
