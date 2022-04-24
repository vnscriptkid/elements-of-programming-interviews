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

const node1 = new BinaryTree(1);
const node2 = new BinaryTree(2);
const node3 = new BinaryTree(3);
const node4 = new BinaryTree(4);
const node5 = new BinaryTree(5);
const node6 = new BinaryTree(6);

node1.left = node2;
node1.right = node3;

node2.parent = node1;
node3.parent = node1;

node3.left = node4;
node3.right = node5;

node4.parent = node3;
node5.parent = node3;

node5.left = node6;
node6.parent = node5;

LCA(node4, node6);
