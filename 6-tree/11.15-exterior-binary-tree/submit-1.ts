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
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor(
        value: string,
        left: BinaryTreeNode | null = null,
        right: BinaryTreeNode | null = null
    ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    get isLeaf() {
        return !this.left && !this.right;
    }
}

export function exteriorBinaryTree(tree: BinaryTreeNode): BinaryTreeNode[] {
    //           A
    //          / \
    //         B   C
    //        /\   /\
    //       D  E F  G
    //      /\      /
    //     H  I    J

    const traversal: BinaryTreeNode[] = [];



    traverseRootToLeftMostLeaf(tree, traversal);
    traverseLeavesLeftToRight(tree, traversal);
    traverseRightMostLeafToRoot(tree, traversal, tree);

    return traversal;
}

function traverseRootToLeftMostLeaf(node: BinaryTreeNode, traversal: BinaryTreeNode[]) {

    if (node.isLeaf) {
        // done, will not include this in traversal
        return;
    }

    // record cur node
    traversal.push(node);

    if (node.left) {
        traverseRootToLeftMostLeaf(node.left, traversal);
    } else {
        traverseRootToLeftMostLeaf(node.right!, traversal);
    }
}

function traverseLeavesLeftToRight(node: BinaryTreeNode, traversal: BinaryTreeNode[]) {
    if (node.isLeaf) {
        traversal.push(node);
        return;
    }

    if (node.left) {
        traverseLeavesLeftToRight(node.left, traversal);
    }

    if (node.right) {
        traverseLeavesLeftToRight(node.right, traversal);
    }
}

function traverseRightMostLeafToRoot(node: BinaryTreeNode, traversal: BinaryTreeNode[], root: BinaryTreeNode) {

    if (node.isLeaf) {
        // skip, return
        return;
    }

    if (node.right) {
        traverseRightMostLeafToRoot(node.right, traversal, root);
    } else {
        traverseRightMostLeafToRoot(node.left!, traversal, root);
    }

    if (node !== root) {
        traversal.push(node)
    }
}