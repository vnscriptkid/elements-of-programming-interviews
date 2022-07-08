// 10.15 COMPUTE THE EXTERIOR OF A BINARY TREE

// The exterior of a binary tree is the following sequence of nodes: the nodes from the
// root to the leftmost leaf, followed by the leaves in left-to-right order, followed by the
// nodes from the right most leaf to the root. (By leftmost (rightmost) leaf, we mean the
// leaf that appears first (last) in an inorder traversal.)

// For example, the exterior of the
// binary tree in Figure 10.1 on Page 150 is{A,B,C,D,E,H,M,N,P,O,I).

// Write a program that computes the exterior of a binary tree.

export class BinaryTreeNode {
    value: string;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        value: string,
        left: TreeNode | null = null,
        right: TreeNode | null = null
    ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export function exteriorBinaryTree(tree: BinaryTreeNode): BinaryTreeNode[] {
    return [];
}
