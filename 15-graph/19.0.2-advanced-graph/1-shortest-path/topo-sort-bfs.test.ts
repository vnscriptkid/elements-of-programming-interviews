import { Graph, topoSort } from "./topo-sort-bfs";
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

  expect(ordering).toEqual([
    "C",
    "E",
    "B",
    "A",
    "F",
    "D",
    "K",
    "H",
    "G",
    "J",
    "I",
    "M",
    "L",
  ]);
});
