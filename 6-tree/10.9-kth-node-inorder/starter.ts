// COMPUTE THE kth NODE IN AN INORDER TRAVERSAL

// It is trivial to find the kth node that appears in an inorder traversal with 0(n) time complexity,
// where n is the number of nodes.

// However, with additional information on each node, you can do better.
// Write a program that efficiently computes the kth node appearing in an inorder traversal.
// Assume that each node stores the number of nodes in the subtree rooted at that node.

export class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
  size: number;

  constructor(
    value: T,
    left: BinaryTreeNode<T> | null = null,
    right: BinaryTreeNode<T> | null,
    size: number
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.size = size;
  }
}

export function findKthNodeBinaryTree(
  tree: BinaryTreeNode<string>,
  k: number
): BinaryTreeNode<string> | null {
  return null;
}
