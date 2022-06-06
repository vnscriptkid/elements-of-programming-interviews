// 16.8 GENERATE BINARY TREES

// Write a program which returns all distinct binary trees with a specified number of nodes.
// For example, if the number of nodes is specified to be three,
// return the trees in Figure 16.5.

export class BTNode {
  value: number;
  left: BTNode | null;
  right: BTNode | null;

  constructor(
    value: number,
    left: BTNode | null = null,
    right: BTNode | null = null
  ) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  clone(): BTNode {
    const root = new BTNode(this.value);
    if (this.left) root.left = this.left.clone();
    if (this.right) root.right = this.right.clone();
    return root;
  }
}

export function generateAllBinaryTrees(n: number): BTNode[] | null[] {
  return helper(1, n);
}
function helper(start: number, end: number): BTNode[] | null[] {
  if (start === end) return [new BTNode(start)];

  if (start > end) return [null];

  const trees: BTNode[] = [];

  for (let i = start; i <= end; i++) {
    const leftTrees = helper(start, i - 1);
    const rightTrees = helper(i + 1, end);

    for (let left of leftTrees) {
      for (let right of rightTrees) {
        const root = new BTNode(i);
        const node = root.clone();
        if (left) node.left = left.clone();
        if (right) node.right = right.clone();
        trees.push(node);
      }
    }
  }
  return trees;
}

const r = generateAllBinaryTrees(3);
console.log(r);

// 1 2 3 4 5
