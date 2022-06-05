// BUILD A MINIMUM HEIGHT BST FROM A SORTED ARRAY

// Given a sorted array, the number of BSTs that can be built on the entries i
// n the array grows enormously with its size. Some of these trees are skewed,
// and are closer to lists; others are more balanced. See Figure 15.3 on Page 263 for an example.

// How would you build a BST of minimum possible height from a sorted array?

// (2,3,5,7,11,13,17,19,23),

export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function buildMinHeightBSTFromSortedArray(list: number[]) {}
