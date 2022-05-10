import { cloneGraph, GraphVertex } from "./submit-1";

test("it works", () => {
  const v1 = new GraphVertex(1);
  const v2 = new GraphVertex(2);
  const v3 = new GraphVertex(3);
  const v4 = new GraphVertex(4);

  v1.edges = [v2, v3];
  v2.edges = [v4];

  const newNode = cloneGraph(v1);

  expect(newNode.label).toBe(1);
  expect(newNode.edges[0].label).toBe(2);
  expect(newNode.edges[1].label).toBe(3);
  expect(newNode.edges[0].edges[0].label).toBe(4);
});
