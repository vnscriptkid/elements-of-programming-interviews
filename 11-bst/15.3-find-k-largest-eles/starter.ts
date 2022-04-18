// FIND THE k LARGEST ELEMENTS IN A BST

// A BST is a sorted data structure, which suggests that it should be possible to find the
// k largest keys easily.

// Write a program that takes as input a BST and an integer k,
// and returns the k largest elements in the BST in decreasing order.

// For example, if the input is the BST in Figure 15.1 on Page 255 and k = 3, your program should return (53,47,43)

export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findKLargestlnBST(tree: BSTNode, k: number): number[] {
  return [];
}
