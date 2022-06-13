import { Graph, topoSort } from "./topo-sort-dfs";

test("it works", () => {
  const graph = new Graph();
  graph.setDestOfVertex("A", ["D"]);
  graph.setDestOfVertex("B", ["D"]);
  graph.setDestOfVertex("C", ["A", "B"]);
  graph.setDestOfVertex("D", ["H", "G"]);
  graph.setDestOfVertex("E", ["A", "D", "F"]);
  graph.setDestOfVertex("F", ["K", "J"]);
  graph.setDestOfVertex("G", ["I"]);
  graph.setDestOfVertex("H", ["I", "J"]);
  graph.setDestOfVertex("I", ["L"]);
  graph.setDestOfVertex("K", ["J"]);
  graph.setDestOfVertex("J", ["M", "L"]);
  graph.setDestOfVertex("L", []);
  graph.setDestOfVertex("M", []);

  const ordering = topoSort(graph);

  //   console.log(ordering);
  //   ["E", "F", "K", "C", "B", "A", "D", "G", "H", "J", "M", "I", "L"];

  expect(ordering).toEqual([
    "E",
    "F",
    "K",
    "C",
    "B",
    "A",
    "D",
    "G",
    "H",
    "J",
    "M",
    "I",
    "L",
  ]);
});
