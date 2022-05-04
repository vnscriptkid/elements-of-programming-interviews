// RECONSTRUCT A BST FROM TRAVERSAL DATA

// Suppose you are given the sequence in which keys are visited in an inorder traversal of a BST,
// and all keys are distinct. Can you reconstruct the BST from the sequence?
// If so, write a program to do so. Solve the same problem for preorder and postorder traversal sequences.

export class BSTNode {
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

export function rebuildBSTFromPreorder(preorderSeq: number[]): BSTNode | null {
  // if (curIdx === preorderSeq.length) return null;

  if (preorderSeq.length) {
    const rootValue = preorderSeq[0];
    const newNode = new BSTNode(rootValue);

    const left = [];
    let i = 1;
    while (i < preorderSeq.length && preorderSeq[i] < rootValue) {
      left.push(preorderSeq[i]);
      i++;
    }

    const right = [];
    while (i < preorderSeq.length) {
      right.push(preorderSeq[i]);
      i++;
    }

    newNode.left = rebuildBSTFromPreorder(left);
    newNode.right = rebuildBSTFromPreorder(right);
    return newNode;
  }

  return null;
}
