import { Edge, shortestPathDag } from "./single-source-shortest-path-dag";

test("it works", () => {
  const graph = new Map([
    ["A", [new Edge("A", "B", 3), new Edge("A", "C", 6)]],
    [
      "B",
      [new Edge("B", "C", 4), new Edge("B", "D", 4), new Edge("B", "E", 11)],
    ],
    ["C", [new Edge("C", "D", 8), new Edge("C", "G", 11)]],
    [
      "D",
      [new Edge("D", "E", -4), new Edge("D", "F", 5), new Edge("D", "G", 2)],
    ],
    ["E", [new Edge("E", "H", 9)]],
    ["F", [new Edge("F", "H", 1)]],
    ["G", [new Edge("G", "H", 2)]],
    ["H", []],
  ]);

  const result = shortestPathDag(graph, "A");

  expect(result).toEqual(
    new Map([
      ["A", 0],
      ["B", 3],
      ["C", 6],
      ["D", 7],
      ["E", 3],
      ["F", 12],
      ["G", 9],
      ["H", 11],
    ])
  );
});
