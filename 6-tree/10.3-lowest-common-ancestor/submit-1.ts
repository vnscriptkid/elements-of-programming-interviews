// COMPUTE THE LOWEST COMMON ANCESTOR IN A BINARY TREE

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

class Answer {
  lowestCommonAncestor: TreeNode | null;
  count: number;

  constructor(lowestCommonAncestor: TreeNode | null, count: number) {
    this.lowestCommonAncestor = lowestCommonAncestor;
    this.count = count;
  }
}

export function lca(
  root: TreeNode,
  node1: TreeNode,
  node2: TreeNode
): TreeNode {
  function question(root: TreeNode | null): Answer {
    // base case
    if (!root) {
      return new Answer(null, 0);
    }

    if (!root.left && !root.right) {
      return new Answer(null, root === node1 || root === node2 ? 1 : 0);
    }

    const leftAnswer = question(root.left);

    if (leftAnswer.count === 2) return leftAnswer;

    const rightAnswer = question(root.right);

    if (rightAnswer.count === 2) return rightAnswer;

    const countLeftAndRight = leftAnswer.count + rightAnswer.count;

    return new Answer(countLeftAndRight === 2 ? root : null, countLeftAndRight);
  }

  return question(root).lowestCommonAncestor!;
}
