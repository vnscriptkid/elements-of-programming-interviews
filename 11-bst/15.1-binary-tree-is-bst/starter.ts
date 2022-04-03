// TEST IF A BINARY TREE SATISFIES THE BST PROPERTY

// Write a program that takes as input a binary tree and checks if the tree satisfies the
// BST property.

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBst(node: TreeNode): boolean {
  return false;
}
