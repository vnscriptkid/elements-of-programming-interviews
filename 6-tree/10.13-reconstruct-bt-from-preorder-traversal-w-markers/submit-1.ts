// 10.13 RECONSTRUCT A BINARY TREE FROM A PREORDER TRAVERSAL WITH MARKERS

// Many different binary trees have the same preorder traversalsequence.
// In this problem, the preorder traversal computation is modified to mark where a
// left or right child is empty.

// For example, the binary tree in Figure 10.5 on the facing
// page yields the following preorder traversal sequence:
// (H,B,F, null,null, E,A,null,null,null,C, null,D, null,G,/,null,null,null)

// Design an algorithm for reconstructing a binary tree from a preorder traversal visit
// sequence that uses null to mark empty children.

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

export function reconstructPreorder(preorder: (string | null)[], curIdx = { value: 0 }): BinaryTreeNode | null {
    if (curIdx.value === preorder.length) {
        throw new Error('should not be here')
    }

    if (preorder[curIdx.value] === null) {
        curIdx.value++;
        return null;
    }

    const curNode = new BinaryTreeNode(preorder[curIdx.value]!)
    curIdx.value++;

    curNode.left = reconstructPreorder(preorder, curIdx);
    curNode.right = reconstructPreorder(preorder, curIdx);

    return curNode;
}

// curIdx = 0
// (H,B,F, null,null, E,A,null,null,null,C, null,D, null,G,I,null,null,null)
//                                   ^

//                       nodeH
//                       /    \
//                   nodeB
//                 /      \
//              nodeF      nodeE
//            /   \         /   \
//         null   null    nodeA   null
//                       /   \
//                    null    null