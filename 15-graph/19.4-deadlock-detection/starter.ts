// High performance database systems use multiple processes and resource locking.
// These systems may not provide mechanisms to avoid or prevent deadlock:
// a situation in which two or more competing actions are each waiting for the other to finish,
// DEAD LOCK DETECTION

// which precludes all these actions from progressing.
// Such systems must support a mechanism to detect deadlocks, as well as an algorithm for recovering from them

// One deadlock detection algorithm makes use of a "wait-for" graph to track
// which other processes a process is currently blocking on.
// In a wait-for graph, processes are represented as nodes, and an edge from process P to Q implies Q is holding a resource that P needs and thus P is waiting for 0 to release its lock on that resource.
// A cycle in this graph implies the possibility of a deadlock. This motivates the following problem.

// Write a program that takes as input a directed graph and checks if the graph contains a cycle.

// https://www.youtube.com/watch?v=a7UGIqR0cI0

export enum Color {
  WHITE,
  GRAY,
  BLACK,
}

export class GraphVertex {
  color: Color;
  edges: GraphVertex[];

  constructor() {
    this.color = Color.WHITE;
    this.edges = [];
  }
}

export function isDeadlocked(edges: number[][]) {}
