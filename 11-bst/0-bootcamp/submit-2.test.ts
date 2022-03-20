import { searchBst, Node } from "./submit-2";

test("searchBst", () => {
  const node19 = new Node(19);
  const node7 = new Node(7);
  const node43 = new Node(43);
  node19.left = node7;
  node19.right = node43;

  const node3 = new Node(3);
  const node11 = new Node(11);
  node7.left = node3;
  node7.right = node11;

  expect(searchBst(node19, 11)).toEqual(node11);
  expect(searchBst(node19, 12)).toEqual(null);
});
