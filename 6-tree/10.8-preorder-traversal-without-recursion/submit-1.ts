// IMPLEMENT A PREORDER TRAVERSAL WITHOUT RECURSION

// This problem is concerned with traversing nodes in a binary tree in preorder fashion.
// See Page 151 for details and examples of these traversals.
// Generally speaking, a traversal computation is easy to implement if recursion is allowed.

// Write a program which takes as input a binary tree and performs a preorder traversal of the tree.
// Do not use recursion. Nodes do not contain parent references.

// For the binary tree in Figure 10.1 on Page 150, the first few stack states are
// (A), (I,B),(I,F,C),</,F,E,D>,(l,F,E),<J,F),<J,G>,(I,H),and</>.
// (Thetopofthestackis the rightmost node in the sequences.)

export class TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value: string,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function preorderTraversal(tree: TreeNode): string {
  //           A
  //          / \
  //         B   C
  //        /\   /\
  //       D  E F  G
  //      /\      /
  //     H  I    J

  // [CE]
  // D
  // result: 'ABD'

  let stack = [tree];
  let result = "";

  while (stack.length) {
    const node = stack.pop();
    result += node!.value;

    if (node!.right) stack.push(node!.right);
    if (node!.left) stack.push(node!.left);
  }

  return result;
}
