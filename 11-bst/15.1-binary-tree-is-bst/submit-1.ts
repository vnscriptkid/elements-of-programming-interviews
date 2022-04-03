// TEST IF A BINARY TREE SATISFIES THE BST PROPERTY

// Write a program that takes as input a binary tree and checks if the tree satisfies the
// BST property.

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

export function isBst(
  node: Node | null,
  min: number = -Infinity,
  max: number = Infinity
): boolean {
  if (!node) return true;

  if (node.value < min || node.value > max) return false;

  return (
    isBst(node.left, min, node.value) && isBst(node.right, node.value, max)
  );
}
