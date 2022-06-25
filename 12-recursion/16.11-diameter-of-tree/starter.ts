// 16.11 COMPUTE THE DIAMETER OF A TREE
// Packets in Ethernet local area networks (LANs) are routed according to the unique
// path in a tree whose leaves correspond to clients, internal nodes to switches, and
// edges to physical connection. In this problem, we want to design an algorithm for
// finding the "worst-case" route, i.e., the two clients that are furthest apart.

// The diameter of a tree is defined to be the length of a longest path in the tree.
// Figure16.6 illustratesthe diameter concept. Design an efficient algorithm to compute
// the diameter of a tree.

export class TreeNode { edges = Array<Edge>() }

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
    return 0;
}