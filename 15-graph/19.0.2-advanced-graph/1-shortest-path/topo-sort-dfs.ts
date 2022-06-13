export class Graph {
  vertexToDest: Map<string, string[]> = new Map();

  setDestOfVertex(fromVertex: string, toVertices: string[]) {
    this.vertexToDest.set(fromVertex, toVertices);
  }

  findDest(vertex: string) {
    return this.vertexToDest.get(vertex);
  }

  get allVertices() {
    return [...this.vertexToDest.keys()];
  }

  get size() {
    return this.vertexToDest.size;
  }

  *[Symbol.iterator]() {
    for (let [vertex, dest] of this.vertexToDest.entries()) {
      yield [vertex, dest];
    }
  }
}

export function topoSort(graph: Graph): string[] {
  const visited = new Set<string>();

  const vertices = graph.allVertices;

  const ordering: string[] = Array(vertices.length).fill(null);

  let nextIdx = ordering.length - 1;

  for (let vertex of vertices) {
    if (!visited.has(vertex)) {
      nextIdx = dfs(graph, vertex, visited, ordering, nextIdx);

      if (nextIdx === -1) return ordering;
    }
  }

  throw new Error("should not be here");
}
function dfs(
  graph: Graph,
  vertex: string,
  visited: Set<string>,
  ordering: string[],
  nextIdx: number
): number {
  // visit cur vertex
  visited.add(vertex);
  // loop all the dest form cur vertex
  for (let dest of graph.findDest(vertex)!) {
    // visit if not visited yet
    if (!visited.has(dest)) {
      nextIdx = dfs(graph, dest, visited, ordering, nextIdx);
    }
  }

  // end of dfs: when recursion comes back, push cur to ordering at nextIdx
  ordering[nextIdx] = vertex;
  return nextIdx - 1;
}
