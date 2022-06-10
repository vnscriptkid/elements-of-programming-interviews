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
    right: BinaryTreeNode<T> | null = null,
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
  //           A
  //          / \
  //         B   C
  //        /\   /\
  //       D  E F  G
  //      /\      /
  //     H  I    J

  let cur: BinaryTreeNode<string> | null = tree;

  while (cur) {
    // count node on the left
    // numOfNodesOnLeft
    const numOfNodesOnTheLeft = cur.left === null ? 0 : cur.left.size + 1;
    // k <= numOfNodesOnLeft => kth on the left
    if (k <= numOfNodesOnTheLeft) {
      cur = cur.left;
    }
    // k === numOfNodesOnLeft + 1 => kth is cur
    else if (numOfNodesOnTheLeft === k - 1) {
      return cur;
    }
    // else: kth on the right
    else {
      cur = cur.right;
      k -= numOfNodesOnTheLeft + 1;
    }
  }

  return null;
}
