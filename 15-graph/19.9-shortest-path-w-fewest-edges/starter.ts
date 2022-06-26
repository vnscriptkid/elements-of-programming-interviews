// 19.9 COMPUTE A SHORTEST PATH WITH FEWEST EDGES

// In the usual formulation of the shortest path problem, the number of edges in the
// path is not a consideration. For example, considering the shortest path problem from
// a to h in Figure 19.1 on Page 350, the sum of the edge costs on the path {a,c,e,d,h) is
// 22, which is the same as for path (a,b,k,i,j,f,g,h). Both are shortest paths, but the
// latter has three more edges.

// Heuristically, if we did want to avoid paths with a large number of edges, we can
// add a small amount to the cost of each edge. However, depending on the structure
// of the graph and the edge costs, this may not result in the shortest path.
// Design an algorithm which takes as input a graph G = (V) E), directed or undirected,
// a nonnegative cost function on E, and vertices s and f; your algorithm should output
// a path with the fewest edges amongst allshortest pathsfrom s to f.

export class Edge {
    from: number;
    to: number;
    weight: number;

    constructor(from: number, to: number, weight: number) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

export function dijkstraShortestPath(graph: Map<number, Edge[]>, start: number, end: number): number[] {
    return [];
}
