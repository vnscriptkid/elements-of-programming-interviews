// 16.8 GENERATE BINARY TREES

// Write a program which returns all distinct binary trees with a specified number of nodes.
// For example, if the number of nodes is specified to be three,
// return the trees in Figure 16.5.

export class BTNode {
  value: number;
  left: BTNode | null;
  right: BTNode | null;

  constructor(
    value: number,
    left: BTNode | null = null,
    right: BTNode | null = null
  ) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

export function generateAllBinaryTrees(n: number): BTNode[] {
  return [];
}
