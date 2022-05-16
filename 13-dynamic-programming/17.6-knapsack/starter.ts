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
  return 0;
}
