//  Design an algorithm for computing the LCA of two nodes in a binary tree in which nodes do not have a parent field.

export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function lca(
  root: TreeNode,
  node1: TreeNode,
  node2: TreeNode
): TreeNode {
  return new TreeNode(1);
}
