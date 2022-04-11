// FIND THE FIRST KEY GREATER THAN A GIVEN VALUE IN A BST

// Write a program that takes as input a BST and a value,
// and returns the first key that would appear in an inorder traversal which is
// greater than the input value.
// For example, when applied to the BST in Figure 15.1 on Page 255 you should return 29 for input 23.

// tree.png
// 23 => 29
// 41 => 43

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

function findFirstGreaterThanK(root: Node, k: number) {}
