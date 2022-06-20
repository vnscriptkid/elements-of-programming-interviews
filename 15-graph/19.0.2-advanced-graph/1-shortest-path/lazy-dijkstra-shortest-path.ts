import Heap from 'collections/heap';

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
    const { prev, dist } = dijkstra(graph, start);

    const path: number[] = [];

    path.unshift(end);

    while (true) {
        let prevOfThis = prev[path[0]]

        if (prevOfThis === null) break;

        path.unshift(prevOfThis);
    }

    return path;
}

function dijkstra(graph: Map<number, Edge[]>, start: number): { prev: any; dist: any; } {
    const n = graph.size;
    const dist = Array(n).fill(Infinity);
    const prev = Array(n).fill(null);
    const visited = Array(n).fill(false);

    // heapItem: [vertex, distanceToVertex]
    const minHeap = new Heap([], null, (a: any, b: any) => b[1] - a[1]);

    dist[start] = 0;
    minHeap.add([start, 0]);

    while (minHeap.length > 0) {
        const [vertex, distanceToVertex] = minHeap.pop();

        visited[vertex] = true;
        if (distanceToVertex > dist[vertex]) continue;

        for (let edge of graph.get(vertex)!) {
            if (visited[edge.to]) continue;

            const distanceToHere = distanceToVertex + edge.weight;
            if (distanceToHere < dist[edge.to]) {
                dist[edge.to] = distanceToHere;
                prev[edge.to] = vertex;
                minHeap.add([edge.to, distanceToHere]);
            }
        }
    }

    return { dist, prev };
}
