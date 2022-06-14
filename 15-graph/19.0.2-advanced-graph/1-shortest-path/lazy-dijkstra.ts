import { Heap } from "collections/heap";
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

class NodeMinDis {
  constructor(public vertex: number, public distance: number) {}
}

export function lazyDijkstra(
  graph: Map<number, Edge[]>,
  startingPoint: number
): number[] {
  const minHeap = new Heap(
    [],
    null,
    (a: NodeMinDis, b: NodeMinDis) => b.distance - a.distance
  );

  const visited = new Set<number>();

  const vertices = [...graph.keys()];

  const minDis = Array(vertices.length).fill(Infinity);

  minHeap.add(new NodeMinDis(startingPoint, 0));
  minDis[startingPoint] = 0;

  while (minHeap.length > 0) {
    const nodeMinDis = minHeap.pop() as NodeMinDis;

    visited.add(nodeMinDis.vertex);

    for (let edge of graph.get(nodeMinDis.vertex)!) {
      if (!visited.has(edge.to)) {
        const newDistance = minDis[nodeMinDis.vertex] + edge.weight;

        if (newDistance < minDis[edge.to]) {
          minDis[edge.to] = newDistance;
          minHeap.add(new NodeMinDis(edge.to, newDistance));
        }
      }
    }
  }

  return minDis;
}
