// CLONE A GRAPH

// Consider a vertex type for a directed graph in which there are two fields:
// an integer label and a list of references to other vertices.
// Design an algorithm that takes a reference to a vertex u,
// and creates a copy of the graph on the vertices reachable from u. Return the copy of u.

export class GraphVertex {
  label: number;
  edges: GraphVertex[];

  constructor(label: number) {
    this.label = label;
    this.edges = [];
  }
}

export function cloneGraph(graph: GraphVertex): GraphVertex {
  const mapping = new Map<GraphVertex, GraphVertex>();

  buildCloneMapping(graph, mapping);

  doCloneDfs(graph, mapping);

  return mapping.get(graph)!;
}

function buildCloneMapping(
  vertex: GraphVertex,
  mapping: Map<GraphVertex, GraphVertex>
) {
  const cloned = clone(vertex);

  mapping.set(vertex, cloned);

  for (const dest of vertex.edges) {
    if (!mapping.has(dest)) {
      buildCloneMapping(dest, mapping);
    }
  }
}

function doCloneDfs(
  vertex: GraphVertex,
  mapping: Map<GraphVertex, GraphVertex>,
  seen = new Set()
) {
  const srcCloned = mapping.get(vertex);

  seen.add(vertex);

  for (const dest of vertex.edges) {
    const destCloned = mapping.get(dest)!;
    srcCloned?.edges.push(destCloned);
  }

  for (const dest of vertex.edges) {
    if (!seen.has(dest)) {
      doCloneDfs(dest, mapping, seen);
    }
  }
}

function clone(vertex: GraphVertex) {
  return new GraphVertex(vertex.label);
}
