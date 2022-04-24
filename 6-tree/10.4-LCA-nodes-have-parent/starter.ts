// COMPUTE THE LCA WHEN NODES HAVE PARENT POINTERS

// Given two nodes in a binary tree, design an algorithm that computes their LCA.
// Assume that each node has a parent pointer.

export class BinaryTree {
  value: number;
  left: BinaryTree | null = null;
  right: BinaryTree | null = null;
  parent: BinaryTree | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export function LCA(node0: BinaryTree, node1: BinaryTree) {}
