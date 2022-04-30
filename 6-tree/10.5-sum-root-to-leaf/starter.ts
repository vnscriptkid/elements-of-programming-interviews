// SUM THE ROOT-TO-LEAF PATHS IN A BINARY TREE

// Consider a binary tree in which each node contains a binary digit.
// A root- to-leaf path can be associated with a binary number—the MSB is at the root.
// As an example, the binary tree in Figure 10.4
// represents the numbers (1000)2, (1001)2, (10110)2, (110011)2, (11000)2, and (1100)2.

export class TreeNode {
  value: 0 | 1;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: 0 | 1) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function sumRootToLeaf(tree: TreeNode): number {
  return 0;
}
