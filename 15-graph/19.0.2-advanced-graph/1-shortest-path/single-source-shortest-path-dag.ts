export class Edge {
  from: string;
  to: string;
  weight: number;

  constructor(from: string, to: string, weight: number) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

export function shortestPathDag(
  graph: Map<string, Edge[]>,
  startingPoint: string
): Map<string, number> {
  const seen = new Set<string>();
  const vertices = [...graph.keys()];
  const ordering = Array(vertices.length).fill(null);
  let nextIdx = ordering.length - 1;

  for (let vertex of graph.keys()) {
    if (!seen.has(vertex)) {
      nextIdx = dfs(graph, vertex, seen, ordering, nextIdx);

      if (nextIdx === -1) break;
    }
  }

  const vertexToDistance = new Map<string, number>();
  for (let vertex of vertices) {
    vertexToDistance.set(vertex, Infinity);
  }

  vertexToDistance.set(startingPoint, 0);

  for (let vertex of ordering) {
    for (let { to, weight } of graph.get(vertex)!) {
      vertexToDistance.set(
        to,
        Math.min(
          vertexToDistance.get(to)!,
          vertexToDistance.get(vertex)! + weight
        )
      );
    }
  }

  return vertexToDistance;
}
function dfs(
  graph: Map<string, Edge[]>,
  vertex: string,
  seen: Set<string>,
  ordering: any[],
  nextIdx: number
): number {
  // visit cur vertex
  seen.add(vertex);
  // check all dest neighbors
  for (let edge of graph.get(vertex)!) {
    if (!seen.has(edge.to)) {
      // recursive calls
      nextIdx = dfs(graph, edge.to, seen, ordering, nextIdx);
    }
  }
  ordering[nextIdx] = vertex;
  // when control get returned to cur fn, update ordering
  return nextIdx - 1;
}
