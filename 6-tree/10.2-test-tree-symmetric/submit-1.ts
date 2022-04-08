// TEST IF A BINARY TREE IS SYMMETRIC

// A binary tree is symmetric if you can draw a vertical line through the root and then the left subtree is the mirror image of the right subtree.
// The concept of a symmetric binary tree is illustrated in Figure 10.3 on the facing page.

// Write a program that checks whether a binary tree is symmetric.

export class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function isSymmetric(root: Node): boolean {
  if (!root) return true;

  function _isSymmetric(left: Node | null, right: Node | null): boolean {
    if (left === null && right === null) return true;

    if (left === null || right === null) return false;

    if (left.value !== right.value) return false;

    return (
      _isSymmetric(left.left, right.right) &&
      _isSymmetric(left.right, right.left)
    );
  }

  return _isSymmetric(root.left, root.right);
}
