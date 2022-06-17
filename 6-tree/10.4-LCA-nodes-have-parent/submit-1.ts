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

export function LCA(node0: BinaryTree, node1: BinaryTree) {
  const depth0 = depth(node0);
  const depth1 = depth(node1);

  const diff = Math.abs(depth0 - depth1);

  if (diff > 0) {
    if (depth0 > depth1) {
      node0 = moveBySteps(node0, diff)!;
    } else {
      // depth1 > depth0
      node1 = moveBySteps(node1, diff)!;
    }
  }

  return moveInTandem(node0, node1);
}

function depth(node: BinaryTree) {
  let cur = node;

  let depth = 0;

  while (cur.parent) {
    depth++;
    cur = cur.parent;
  }

  return depth;
}
function moveBySteps(node: BinaryTree | null, steps: number) {
  while (node !== null && steps > 0) {
    node = node.parent;
    steps--;
  }

  return node;
}
function moveInTandem(node0: BinaryTree | null, node1: BinaryTree | null) {
  while (node0 !== null && node1 !== null && node0 !== node1) {
    node0 = node0.parent;
    node1 = node1.parent;
  }

  return node0;
}

