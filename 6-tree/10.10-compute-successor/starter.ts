// 10.10 COMPUTE THE SUCCESSOR

// The successor of a node in a binary tree is the node that appears immediately after
// the given node in an inorder traversal. For example, in Figure 10.1 on Page 150, the
// successor of G is A,and the successor of A is /.

// Design an algorithm that computes the successor of a node in a binary tree. Assume
// that each node storesits parent.

// Hint:Study the node'srightsubtree. What if the node does not have a right subtree

export class Node {
    value: number;
    left: Node | null;
    right: Node | null;
    parent: Node | null;
    
    constructor(value: number, left: Node | null = null, right: Node | null = null, parent: Node | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

export function findSuccessor( node: Node) {
}