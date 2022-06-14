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

export function findLargestNumberTeams(edges: number[][]) {}
