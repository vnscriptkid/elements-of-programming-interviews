import { inorderTraversal, TreeNode } from "./submit-1"

test('it works', () => {
    const nodeD = new TreeNode('d');
    const nodeE = new TreeNode('e');
    const nodeB = new TreeNode('b', null, nodeD);
    const nodeC = new TreeNode('c', nodeE);
    const nodeA = new TreeNode('a', nodeB, nodeC);

    nodeD.parent = nodeB;
    nodeB.parent = nodeA;
    nodeC.parent = nodeA;
    nodeE.parent = nodeC;

    //       a
    //     /   \
    //    b     c
    //     \   /
    //     d  e

    expect(inorderTraversal(nodeA)).toEqual(['b', 'd', 'a', 'e', 'c']);
})