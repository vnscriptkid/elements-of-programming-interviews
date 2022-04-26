// COMPUTE THE LCA IN A BST

// Design an algorithm that takes as input a BST and two nodes, and returns the LCA of the two nodes.
// For example, for the BST in Figure 15.1 on Page 255, and nodes C and G, your algorithm should return B.
// Assume all keys are distinct. Nodes do not have references to their parents.

// Input nodes are not null and the key at s is less than or equal to that at b

export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findLCA(tree: BSTNode, s: BSTNode, b: BSTNode) {
  //     8
  //    / \
  //   4   9
  //  / \
  //(1)  6
  //     /\
  //   (5) 7
  let cur: BSTNode | null = tree;

  while (cur) {
    // case 1.1: cur value > s value, > b value => keep searching on the left
    if (cur.value > s.value && cur.value > b.value) {
      cur = cur.left;
    }

    // case 1.2: cur value < s value, < b value => keep searching on the right
    else if (cur.value < s.value && cur.value < b.value) {
      cur = cur.right;
    }
    // case 2: cur value > s value, < b value
    else if (cur.value > s.value && cur.value < b.value) return cur;
    // case 3: cur value === s value
    else if (cur === s) return s;
    // case 4: cur value === b value
    else if (cur === b) return b;
    else {
      throw new Error("Another case");
    }
  }

  return null;
}
