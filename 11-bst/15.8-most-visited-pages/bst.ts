export class BinarySearchTreeNode {
  page: string;
  count: number;
  left: BinarySearchTreeNode | null;
  right: BinarySearchTreeNode | null;

  constructor(page: string, count: number) {
    this.page = page;
    this.count = count;
    this.left = null;
    this.right = null;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf;
  }

  get hasTwoChildren() {
    return this.hasChildren && this.left && this.right;
  }

  get hasOneChild() {
    return this.hasChildren && (!this.left || !this.right);
  }

  clone() {
    return new BinarySearchTreeNode(this.page, this.count);
  }
}

export class BinarySearchTree {
  root: BinarySearchTreeNode | null;

  constructor() {
    this.root = null;
  }

  *inOrderTraversal(node = this.root): any {
    if (node?.left) yield* this.inOrderTraversal(node.left);
    yield node;
    if (node?.right) yield* this.inOrderTraversal(node.right);
  }

  *reverseInorderTraversal(node = this.root): any {
    if (node?.right) yield* this.reverseInorderTraversal(node.right);

    yield node;

    if (node?.left) yield* this.reverseInorderTraversal(node.left);
  }

  *postOrderTraversal(node = this.root): any {
    if (node?.left) yield* this.postOrderTraversal(node.left);
    if (node?.right) yield* this.postOrderTraversal(node.right);
    yield node;
  }

  *preOrderTraversal(node = this.root): any {
    yield node;
    if (node?.left) yield* this.preOrderTraversal(node.left);
    if (node?.right) yield* this.preOrderTraversal(node.right);
  }

  insert(count: number, page: string) {
    if (this.root === null) {
      this.root = new BinarySearchTreeNode(page, count);
      return;
    }

    let node = this.root;

    while (true) {
      if (count <= node.count) {
        if (node.left !== null) node = node.left;
        else {
          node.left = new BinarySearchTreeNode(page, count);
          return;
        }
      } else {
        if (node.right !== null) node = node.right;
        else {
          node.right = new BinarySearchTreeNode(page, count);
          return;
        }
      }
    }
  }

  insertNode(newNode: BinarySearchTreeNode) {
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let node = this.root;

    while (true) {
      if (newNode.count <= node.count) {
        if (node.left !== null) node = node.left;
        else {
          node.left = newNode;
          return;
        }
      } else {
        if (node.right !== null) node = node.right;
        else {
          node.right = newNode;
          return;
        }
      }
    }
  }

  hasPage(page: string) {
    for (let node of this.postOrderTraversal()) {
      if (node.page === page) return true;
    }
    return false;
  }

  findInorderSuccessor(starter: BinarySearchTreeNode): BinarySearchTreeNode {
    let curNode = starter;

    while (curNode && curNode.left) {
      curNode = curNode.left;
    }

    return curNode;
  }

  removeNode(targetNode: BinarySearchTreeNode, curNode = this.root): any {
    if (curNode === null) return null;

    if (targetNode.count < curNode.count) {
      curNode.left = this.removeNode(targetNode, curNode.left);
    } else if (targetNode.count > curNode.count) {
      curNode.right = this.removeNode(targetNode, curNode.right);
    } else {
      if (curNode === targetNode) {
        // 1) Node to be deleted is the leaf: Simply remove from the tree.
        //           50                            50
        //        /     \         delete(20)      /   \
        //       30      70       --------->    30     70
        //      /  \    /  \                     \    /  \
        //    20   40  60   80                   40  60   80
        if (targetNode.isLeaf) {
          return null;
        }

        // 2) Node to be deleted has only one child: Copy the child to the node and delete the child
        //           50                            50
        //        /     \         delete(30)      /   \
        //       30      70       --------->    40     70
        //         \    /  \                          /  \
        //         40  60   80                       60   80
        if (targetNode.hasOneChild) {
          const temp = targetNode.left || targetNode.right;

          // targetNode.left = targetNode.right = null;

          return temp;
        }

        // 3) Node to be deleted has two children: Find inorder successor of the node.
        // Copy contents of the inorder successor to the node and delete the inorder successor.
        // Note that inorder predecessor can also be used.
        //       50                            60
        //    /     \         delete(50)      /   \
        //   40      70       --------->    40    70
        //          /  \                            \
        //         60   80                           80
        const inorderSuccessor = this.findInorderSuccessor(targetNode.right!);

        targetNode.count = inorderSuccessor.count;
        targetNode.page = inorderSuccessor.page;

        targetNode.right = this.removeNode(inorderSuccessor, targetNode.right);
      } else {
        curNode.left = this.removeNode(targetNode, curNode.left);
      }
    }

    return curNode;
  }
}
