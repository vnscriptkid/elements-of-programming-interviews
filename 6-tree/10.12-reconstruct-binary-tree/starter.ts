// 10.12 RECONSTRUCT A BINARY TREE FROM TRAVERSAL DATA

// Many different binary trees yield the same sequence of keys in an inorder, preorder,
// or postorder traversal. However, given an inorder traversal and one of any two other
// traversal orders of a binary tree, there exists a unique binary tree that yields those
// orders, assuming each node holds a distinct key. 

// For example, the unique binary
// tree whose inorder traversal sequence is (F,B,A,E,H,C,D,I,G) and whose preorder
// traversal sequence is (H,B,F,E,A,C,D,G,I) is given in Figure 10.5 on the following
// page.

// Given an inorder traversal sequence and a preorder traversal sequence of a binary
// tree write a program to reconstruct the tree. Assume each node has a unique key.

export class BinaryTreeNode {
    value: string;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor(value: string, left: BinaryTreeNode | null = null, right: BinaryTreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export function binaryTreeFromPreorderInorder(preorder: string[], inorder: string[]): BinaryTreeNode {
    return new BinaryTreeNode('x')
}