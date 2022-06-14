import { Edge, lazyDijkstra } from "./lazy-dijkstra";

test("it works", () => {
  const result = lazyDijkstra(
    new Map([
      [0, [new Edge(0, 1, 4), new Edge(0, 2, 1)]],
      [1, [new Edge(1, 3, 1)]],
      [2, [new Edge(2, 1, 2), new Edge(2, 3, 5)]],
      [3, [new Edge(3, 4, 3)]],
      [4, []],
    ]),
    0
  );

  expect(result).toEqual([0, 3, 1, 4, 7]);
});
