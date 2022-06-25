// 16.11 COMPUTE THE DIAMETER OF A TREE
// Packets in Ethernet local area networks (LANs) are routed according to the unique
// path in a tree whose leaves correspond to clients, internal nodes to switches, and
// edges to physical connection. In this problem, we want to design an algorithm for
// finding the "worst-case" route, i.e., the two clients that are furthest apart.

// Figure 16.6: The diameter for the above tree is 31. The corresponding path is{A,B,C,D, E), which is
//     depicted by the dashed edges.

// The diameter of a tree is defined to be the length of a longest path in the tree.
// Figure16.6 illustratesthe diameter concept. Design an efficient algorithm to compute
// the diameter of a tree.

export class TreeNode {
    edges: Edge[]

    constructor(edges: Edge[] = []) {
        this.edges = edges;
    }
}

export class Edge {
    dest: TreeNode;
    length: number;

    constructor(dest: TreeNode, length: number) {
        this.dest = dest;
        this.length = length;
    }
}

export class HeightAndDiameter {
    height: number;
    diameter: number;

    constructor(height: number, diameter: number) {
        this.height = height;
        this.diameter = diameter;
    }
}
export function computeDiameter(root: TreeNode): number {
    return helper(root).diameter;
}

function helper(root: TreeNode | null): HeightAndDiameter {
    if (root === null) {
        return new HeightAndDiameter(0, 0)
    }

    let leafToHere: number[] = [];
    let bestDiameter = -Infinity;

    let [max1, max2] = [0, 0];

    for (let edge of root.edges) {
        const { height, diameter } = helper(edge.dest);

        leafToHere.push(height + edge.length)
        bestDiameter = Math.max(bestDiameter, diameter)
    }

    leafToHere.sort((a, b) => b - a);
    if (leafToHere[0]) max1 = leafToHere[0];
    if (leafToHere[1]) max2 = leafToHere[1];

    return new HeightAndDiameter(
        max1,
        Math.max(max1 + max2, bestDiameter)
    )
}