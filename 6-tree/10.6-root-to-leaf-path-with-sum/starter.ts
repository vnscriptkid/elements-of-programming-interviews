// FIND A ROOT TO LEAF PATH WITH SPECIFIED SUM

// You are given a binary tree where each node is labeled with an integer.
// The path weight of a node in such a tree is the sum of the integers on the unique path from the root to that node.
// For the example shown in Figure 10.1 on Page 150, the path weight of E is 591.

// Write a program which takes as input an integer and a binary tree with integer node weights,
// and checks if there exists a leaf whose path weight equals the given integer.

export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function hasPathSum(tree: TreeNode, targetSum: number): boolean {
  return false;
}
