// CLONE A GRAPH

// Consider a vertex type for a directed graph in which there are two fields:
// an integer label and a list of references to other vertices.
// Design an algorithm that takes a reference to a vertex u,
// and creates a copy of the graph on the vertices reachable from u. Return the copy of u.

class GraphVertex {
  label: number;
  edges: GraphVertex[];

  constructor(label: number) {
    this.label = label;
    this.edges = [];
  }
}

export function cloneGraph(graph: GraphVertex) {}
