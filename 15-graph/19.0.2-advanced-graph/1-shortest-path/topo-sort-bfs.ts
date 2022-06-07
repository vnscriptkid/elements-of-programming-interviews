export class Graph {
  vertexToDest: Map<string, string[]> = new Map();

  setDestOfVertex(fromVertex: string, toVertices: string[]) {
    this.vertexToDest.set(fromVertex, toVertices);
  }

  get size() {
    return this.vertexToDest.size;
  }

  findDest(vertex: string) {
    return this.vertexToDest.get(vertex);
  }

  get allVertices() {
    return [...this.vertexToDest.keys()];
  }

  *[Symbol.iterator]() {
    for (let [vertex, dest] of this.vertexToDest.entries()) {
      yield [vertex, dest];
    }
  }
}

class Queue extends Array {
  enqueue(value: string) {
    this.push(value);
  }

  dequeue() {
    return this.shift();
  }

  get empty() {
    return this.length === 0;
  }
}

export function topoSort(graph: Graph): string[] {
  const incommings = new Map<string, number>();

  for (let [vertex, dests] of graph) incommings.set(vertex as string, 0);

  for (let [vertex, dests] of graph) {
    for (let dest of dests) {
      if (!incommings.has(dest)) incommings.set(dest as string, 0);
      incommings.set(dest, incommings.get(dest)! + 1);
    }
  }

  const queue = new Queue();

  for (let [vertex, numOfIncommings] of incommings) {
    if (numOfIncommings === 0) queue.enqueue(vertex);
  }

  const ordering: string[] = [];

  while (!queue.empty) {
    const nextVertex = queue.dequeue();
    ordering.push(nextVertex);

    for (let dest of graph.findDest(nextVertex)!) {
      incommings.set(dest, incommings.get(dest)! - 1);

      if (incommings.get(dest) === 0) {
        queue.enqueue(dest);
      }
    }
  }

  return ordering.length === graph.size ? ordering : [];
}
