// 15.10 INSERTION AND DELETION IN A BST

// A BST is a dynamic data structure in particular,
// if implemented carefully key insertion and deletion can be made very fast.

// Design efficient functions for inserting and removing keys in a BST.
// Assume that all elements in the BST are unique,
// and that your insertion method must preserve this property.

export class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    data: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

interface BstAPI {
  insert: (value: number) => void;
  delete: (value: number) => TreeNode | null;
}

export class BinarySearchTree implements BstAPI {
  root: TreeNode | null;

  constructor(root: TreeNode | null = null) {
    this.root = root;
  }

  insert(value: number) {}

  delete(value: number) {
    return null;
  }
}
