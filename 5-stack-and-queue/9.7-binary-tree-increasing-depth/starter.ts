// COMPUTE BINARY TREE NODES IN ORDER OF INCREASING DEPTH

// Binary trees are formally defined in Chapter 10. In particular,
// each node in a binary tree has a depth, which is its distance from the root.

// Given a binary tree, return an array consisting of the keys at the same level.
// Keys should appear in the order of the corresponding nodes' depths,
// breaking ties from left to right.
// For example, you should return ((314), (6, 6), (271, 561, 2, 271), (28, 0, 3,1, 28), (17,401, 257), (641)}
// for the binary tree in Figure 10.1 on Page 150.

export class BinaryTreeNode {
  value: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(
    value: number,
    left: BinaryTreeNode | null = null,
    right: BinaryTreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function binaryTreeDepthOrder(tree: BinaryTreeNode): number[][] {
  return [];
}
