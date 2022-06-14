// TEAM PHOTO DAY—2

// How would you generalize your solution to Problem 14.8 on Page 248,
// to determine the largest number of teams that can be photographed simultaneously
// subject to the same constraints?
// Hint: Form a DAG in which paths correspond to valid placements.

// Solution: Let G be the DAG with vertices corresponding to the teams
// as follows and edges from vertex X to Y iff Team X can be placed behind Team Y.

// Every sequence of teams where a team can be placed behind its predecessor
// corresponds to a path in G. To find the longest such sequence,
// we simply need to find the longest path in the DAG G.
// We can do this, for example, by topologically ordering the vertices in G;
// the longest path terminating at vertex v is the maximum of the longest paths
// terminating at v's fan-ins concatenated with v itself.

export class GraphVertex {
  edges: GraphVertex[];

  constructor() {
    this.edges = [];
  }
}

export function findLargestNumberTeams(edges: number[][]) {
  // build graph
  const graph = new Map<number, number[]>();
  const incommings = new Map<number, number>();
  for (let [from, to] of edges) {
    if (!graph.has(from)) graph.set(from, []);
    if (!graph.has(to)) graph.set(to, []);
    if (!incommings.has(from)) incommings.set(from, 0);
    if (!incommings.has(to)) incommings.set(to, 0);

    incommings.set(to, incommings.get(to)! + 1);
    graph.get(from)?.push(to);
  }
  // do topo sort dfs
  const noIncommings = [];
  for (let [vertex, numOfIncommings] of incommings.entries()) {
    if (numOfIncommings === 0) noIncommings.push(vertex);
  }

  let maxLength = 0;

  for (let vertex of noIncommings) {
    maxLength = Math.max(maxLength, dfs(graph, vertex));
  }

  return maxLength;
}
function dfs(graph: Map<number, number[]>, vertex: number): number {
  let maxLength = 1;

  for (let nextVertex of graph.get(vertex)!) {
    let candidate = 1 + dfs(graph, nextVertex);

    maxLength = Math.max(candidate, maxLength);
  }

  return maxLength;
}
