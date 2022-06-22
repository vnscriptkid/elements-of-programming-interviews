// 10.11 IMPLEMENT AN INORDER TRAVERSAL WITH 0(1) SPACE

// The direct implementation of an inorder traversal using recursion has 0(h) space
// complexity, where h is the height of the tree. Recursion can be removed with an
// explicit stack, but the space complexity remains 0(h).

// Write a nonrecursive program for computing the inorder traversal sequence for a
// binary tree. Assume nodes have parent fields.

export class TreeNode {
    value: string;
    left: TreeNode | null;
    right: TreeNode | null;
    parent: TreeNode | null;

    constructor(value: string, left: TreeNode | null = null, right: TreeNode | null = null, parent: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

export function inorderTraversal(tree: TreeNode): string[] {
    //       a
    //     /   \
    //    b     c
    //     \   /
    //     d  e

    // b d a e c
    return [];
}