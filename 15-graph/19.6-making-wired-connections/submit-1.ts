// MAKING WIRED CONNECTIONS

// Consider a collection of electrical pins on a printed circuit board (PCB).
// For each pair of pins, there may or may not be a wire joining them.
// This is shown in Figure 19.8, where vertices correspond to pins,
// and edges indicate the presence of a wire between pins.
// (The significance of the colors is explained later.)

// Design an algorithm that takes a set of pins and a set of wires connecting pairs of pins,
// and determines if it is possible to place some pins on the left half of a PCB,
// and the remainder on the right half, such that each wire is between left and right halves.
// Return such a division, if one exists.
// For example, the light vertices and dark vertices in Figure 19.8 are such division.

enum Color {
  NOTHING = -1,
  LIGHT = 0,
  DARK = 1,
}

export function isAnyPlacementFeasible(edges: number[][]) {
  // build graph using adjacency list
  const { graph, color } = buildGraph(edges);
  // visit each vertex in bfs traversal
  for (let [vertex] of graph.entries()) {
    if (color.get(vertex) === Color.NOTHING) {
      if (bfs(graph, color, vertex) === false) return false;
    }
  }
  // flip neighbors color
  return true;
}

function buildGraph(edges: number[][]) {
  const graph = new Map();
  const color = new Map();
  // { v1: [v2, v3] }

  for (const [v1, v2] of edges) {
    if (!graph.has(v1)) {
      graph.set(v1, []);
      color.set(v1, Color.NOTHING);
    }
    if (!graph.has(v2)) {
      graph.set(v2, []);
      color.set(v2, Color.NOTHING);
    }

    graph.get(v1).push(v2);
    graph.get(v2).push(v1);
  }

  return { graph, color };
}
function bfs(graph: Map<any, any>, color: Map<any, any>, vertex: any): boolean {
  const queue = [vertex]; // push, shift

  color.set(vertex, Color.LIGHT);

  while (queue.length > 0) {
    const vertex = queue.shift();

    for (let connectedVertex of graph.get(vertex)) {
      if (color.get(connectedVertex) === Color.NOTHING) {
        queue.push(connectedVertex);
        color.set(connectedVertex, flipColor(color, vertex));
      } else if (color.get(connectedVertex) === color.get(vertex)) return false;
    }
  }

  return true;
}

function flipColor(color: Map<number, Color>, vertex: number): Color {
  return color.get(vertex) === Color.LIGHT ? Color.DARK : Color.LIGHT;
}
