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

export function lca(node0: TreeNode, node1: TreeNode) {
  const seen = new Set();

  let cur0: TreeNode | null = node0,
    cur1: TreeNode | null = node1;

  while (cur0 !== null || cur1 !== null) {
    if (cur0 !== null) {
      if (seen.has(cur0)) return cur0;

      seen.add(cur0);
      cur0 = cur0.parent;
    }

    if (cur1 !== null) {
      if (seen.has(cur1)) return cur1;

      seen.add(cur1);
      cur1 = cur1.parent;
    }
  }

  throw new Error("No common ancestor");
}
