// IMPLEMENT AN INORDER TRAVERSAL WITHOUT RECURSION

// This problem is concerned with traversing nodes in a binary tree in an inorder fashion.
// See Page 151 for details and examples of these traversals.
// Generally speaking, a traversal computation is easy to implement if recursion is allowed.

// Write a program which takes as input a binary tree and performs an inorder traversal of the tree.
// Do not use recursion. Nodes do not contain parent references.

export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function BSTInSortedOrder(tree: TreeNode): string {
  return "";
}
