// RECONSTRUCT A BST FROM TRAVERSAL DATA

// Suppose you are given the sequence in which keys are visited in an inorder traversal of a BST,
// and all keys are distinct. Can you reconstruct the BST from the sequence?
// If so, write a program to do so. Solve the same problem for preorder and postorder traversal sequences.

class BSTNode {
  left: BSTNode | null;
  right: BSTNode | null;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//      5
//     / \
//    3   8
//     \
//      4

// preorder: [ROOT] LEFT RIGHT
// [5,3,4,8]

export function rebuildBSTFromPreorder(preorderSeq: number[]): BSTNode {
  return new BSTNode(0);
}
