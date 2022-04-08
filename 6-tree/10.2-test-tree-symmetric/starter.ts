// TEST IF A BINARY TREE IS SYMMETRIC

// A binary tree is symmetric if you can draw a vertical line through the root and then the left subtree is the mirror image of the right subtree.
// The concept of a symmetric binary tree is illustrated in Figure 10.3 on the facing page.

// Write a program that checks whether a binary tree is symmetric.

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

function isSymmetric(root: TreeNode): boolean {
  return false;
}
