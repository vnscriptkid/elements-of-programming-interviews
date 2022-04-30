// SUM THE ROOT-TO-LEAF PATHS IN A BINARY TREE

// Consider a binary tree in which each node contains a binary digit.
// A root- to-leaf path can be associated with a binary number—the MSB is at the root.
// As an example, the binary tree in Figure 10.4
// represents the numbers (1000)2, (1001)2, (10110)2, (110011)2, (11000)2, and (1100)2.

export class TreeNode {
  value: 0 | 1;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: 0 | 1) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function sumRootToLeaf(
  tree: TreeNode | null,
  cur: any = [],
  sum = { value: 0 }
): number {
  if (tree === null) return sum.value;

  cur.push(tree.value);

  if (tree.left === null && tree.right === null) {
    // leaf node
    console.log({ cur });
    sum.value += parseInt(cur.join(""), 2) || 0;
    return sum.value;
  }

  if (tree.left) {
    sumRootToLeaf(tree.left, cur, sum);
    cur.pop();
  }

  if (tree.right) {
    sumRootToLeaf(tree.right, cur, sum);
    cur.pop();
  }

  return sum.value;
}
