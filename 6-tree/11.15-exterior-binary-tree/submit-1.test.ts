import { BinaryTreeNode, exteriorBinaryTree } from "./submit-1";

test('it works', () => {
    const nodeH = new BinaryTreeNode("H");
    const nodeI = new BinaryTreeNode("I");
    const nodeE = new BinaryTreeNode("E");
    const nodeD = new BinaryTreeNode("D", nodeH, nodeI);
    const nodeF = new BinaryTreeNode("F");
    const nodeJ = new BinaryTreeNode("J");
    const nodeG = new BinaryTreeNode("G", nodeJ);
    const nodeC = new BinaryTreeNode("C", nodeF, nodeG);
    const nodeB = new BinaryTreeNode("B", nodeD, nodeE);
    const nodeA = new BinaryTreeNode("A", nodeB, nodeC);

    //           A
    //          / \
    //         B   C
    //        /\   /\
    //       D  E F  G
    //      /\      /
    //     H  I    J

    expect(exteriorBinaryTree(nodeA)).toEqual([
        nodeA, nodeB, nodeD, nodeH,
        nodeI, nodeE, nodeF, nodeJ,
        nodeG, nodeC
    ])
})