// COMPUTE THE LCA OPTIMIZING FOR CLOSE ANCESTORS

// Problem 10.4 on Page 157 is concerned with computing the LCA in a binary tree with parent pointers
// in time proportional to the height of the tree.

// The algorithm presented in Solution 10.4 on Page 157 entails traversing all the way to the root
// even if the nodes whose LCA is being computed are very close to their LCA.

// Design an algorithm for computing the LCA of two nodes in a binary tree.
// The algorithm's time complexity should depend only on the distance from the nodes to the LCA.

export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  parent: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function lca(node0: TreeNode, node1: TreeNode) {}
