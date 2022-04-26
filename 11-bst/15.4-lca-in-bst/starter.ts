// COMPUTE THE LCA IN A BST

// Design an algorithm that takes as input a BST and two nodes, and returns the LCA of the two nodes.
// For example, for the BST in Figure 15.1 on Page 255, and nodes C and G, your algorithm should return B.
// Assume all keys are distinct. Nodes do not have references to their parents.

// Input nodes are not null and the key at s is less than or equal to that at b

class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findLCA(tree: BSTNode, s: BSTNode, b: BSTNode) {}
