// A binary tree is said to be height-balanced if for each node in the tree, the difference in the height of its left and right subtrees is at most one.
// A perfect binary tree is height-balanced, as is a complete binary tree.
// A height-balanced binary tree does not have to be perfect or complete—see Figure 10.2 on the facing page for an example.
// Write a program that takes as input the root of a binary tree and checks whether the tree is height-balanced.

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

export function isBalanced(node: any) {}
