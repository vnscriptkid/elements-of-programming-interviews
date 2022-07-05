// 10.14 FORM A LINKED LIST FROM THE LEAVES OF A BINARY TREE

// In some applications of a binary tree, only the leaf nodes contain actual information.
// For example, the outcomes of matches in a tennis tournament can be represented by
// a binary tree where leaves are players. The internal nodes correspond to matches,
// with a single winner advancing. For such a tree, we can link the leaves to get a list of
// participants.

// Given a binary tree, compute a linked list from the leaves of the binary tree. The
// leaves should appear in left-to-right order. For example, when applied to the binary
// tree in Figure 10.1 on Page 150, your function should return (D,E,H,M,N,P).

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
}

//           A
//          / \
//         B   C
//        /\   /\
//       D  E F  G
//      /\      /
//     H  I    J

export function createListOfLeaves(tree: BinaryTreeNode, list: BinaryTreeNode[] = []): BinaryTreeNode[] {
    if (!tree) return [];

    if (!tree.left && !tree.right) {
        list.push(tree);
        return [];
    }

    createListOfLeaves(tree.left!, list);
    createListOfLeaves(tree.right!, list);

    return list;
}
