import { computeDiameter, Edge, TreeNode } from "./submit-1"

test('it works', () => {
    const nodeN = new TreeNode();
    const nodeO = new TreeNode();
    const nodeP = new TreeNode();

    const nodeM = new TreeNode(
        [
            new Edge(nodeN, 1),
            new Edge(nodeO, 2),
            new Edge(nodeP, 3),
        ]
    )

    const nodeL = new TreeNode();

    const nodeK = new TreeNode(
        [
            new Edge(nodeL, 4),
            new Edge(nodeM, 2),
        ]
    )

    const nodeJ = new TreeNode()

    const nodeI = new TreeNode(
        [
            new Edge(nodeJ, 6),
            new Edge(nodeK, 4),
        ]
    )

    const nodeH = new TreeNode()

    const nodeG = new TreeNode(
        [
            new Edge(nodeH, 2),
            new Edge(nodeI, 1),
        ]
    )

    const nodeE = new TreeNode()
    const nodeF = new TreeNode()

    const nodeD = new TreeNode([
        new Edge(nodeE, 6)
    ])

    const nodeC = new TreeNode(
        [
            new Edge(nodeD, 4),
            new Edge(nodeF, 3),
        ]
    )

    const nodeA = new TreeNode()

    const nodeB = new TreeNode(
        [
            new Edge(nodeC, 7),
            new Edge(nodeA, 14),
            new Edge(nodeG, 3),
        ]
    )

    expect(computeDiameter(nodeB)).toEqual(31)

})