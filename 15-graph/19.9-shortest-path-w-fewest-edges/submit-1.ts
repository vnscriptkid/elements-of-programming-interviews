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

const Heap = require('collections/heap');

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

export class VertexAndDistance {
    vertex: number;
    distance: number;

    constructor(vertex: number, distance: number) {
        this.vertex = vertex;
        this.distance = distance;
    }
}

export function dijkstraShortestPath(graph: Map<number, Edge[]>, start: number, end: number): number[] {
    const n = graph.size;
    const visited = Array(n).fill(false);
    const prev = Array(n).fill(null);
    const minDist = Array(n).fill(Infinity);
    const minEdges = Array(n).fill(Infinity);
    const minHeap = new Heap([], null, (a: VertexAndDistance, b: VertexAndDistance) => b.distance - a.distance);

    minDist[start] = 0;
    minEdges[start] = 0;
    minHeap.add(new VertexAndDistance(start, 0));

    while (minHeap.length) {
        const vertexAndDistance = minHeap.pop() as VertexAndDistance;

        if (visited[vertexAndDistance.vertex] === true) continue;

        if (minDist[vertexAndDistance.vertex] < vertexAndDistance.distance) continue;

        visited[vertexAndDistance.vertex] = true;

        for (let edge of graph.get(vertexAndDistance.vertex)!) {
            if (visited[edge.to] === true) continue;

            const newDistance = vertexAndDistance.distance + edge.weight;
            const newEdges = minEdges[vertexAndDistance.vertex] + 1;

            if (newDistance < minDist[edge.to] && newEdges < minEdges[edge.to]) {
                prev[edge.to] = vertexAndDistance.vertex;
                minDist[edge.to] = newDistance;
                minEdges[edge.to] = newEdges;
                minHeap.add(new VertexAndDistance(edge.to, newDistance))
            }
        }
    }

    const result: number[] = [end];

    while (prev[result[0]] !== null) {
        result.unshift(prev[result[0]])
    }

    return result;
}
