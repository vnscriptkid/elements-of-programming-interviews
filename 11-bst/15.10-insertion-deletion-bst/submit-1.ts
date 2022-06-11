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
  delete: (value: number) => void;
}

export class BinarySearchTree implements BstAPI {
  root: TreeNode | null;

  constructor(root: TreeNode | null = null) {
    this.root = root;
  }

  insert(value: number) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let cur = this.root;

    while (cur) {
      if (value <= cur.data) {
        // newNode is on the left
        if (cur.left === null) {
          cur.left = newNode;
          return;
        }
        cur = cur.left;
      } else {
        // newNode is on the right
        if (cur.right === null) {
          cur.right = newNode;
          return;
        }
        cur = cur.right;
      }
    }
  }

  delete(value: number) {
    this.root = this.deleteRecursively(this.root, value);
  }

  private deleteRecursively(localRoot: TreeNode | null, valueToDelete: number) {
    if (localRoot === null) return null;

    if (localRoot.data === valueToDelete) {
      // delete this node localRoot
      // case 1: no children
      if (localRoot.left === null && localRoot.right === null) {
        return null;
      }
      // case 2: one child
      if (localRoot.left === null) {
        return localRoot.right;
      }

      if (localRoot.right === null) {
        return localRoot.left;
      }
      // case 3: 2 children
      const successor = this.findSuccessor(localRoot.right);
      const newNode = new TreeNode(successor.data);
      newNode.left = localRoot.left;
      newNode.right = localRoot.right;
      this.deleteRecursively(localRoot.right, successor.data);
      return newNode;
    }

    if (valueToDelete < localRoot.data) {
      // node to delete on the left of localRoot
      localRoot.left = this.deleteRecursively(localRoot!.left, valueToDelete);
    } else {
      // node to delete on the right of localRoot
      localRoot.right = this.deleteRecursively(localRoot!.right, valueToDelete);
    }

    return localRoot;
  }

  private findSuccessor(localRoot: TreeNode): TreeNode {
    if (localRoot.left === null) return localRoot;

    return this.findSuccessor(localRoot.left);
  }
}
