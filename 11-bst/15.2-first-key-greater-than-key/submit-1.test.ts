import { findFirstGreaterThanK, Node } from "./submit-1";

test("it works", () => {
  const node19 = new Node(19);
  const node7 = new Node(7);
  const node43 = new Node(43);
  const node3 = new Node(3);
  const node11 = new Node(11);
  const node2 = new Node(2);
  const node5 = new Node(5);
  const node17 = new Node(17);
  const node13 = new Node(13);
  const node23 = new Node(23);
  const node47 = new Node(47);
  const node37 = new Node(37);
  const node53 = new Node(53);
  const node29 = new Node(29);
  const node41 = new Node(41);
  const node31 = new Node(31);

  node19.left = node7;
  node19.right = node43;
  node7.left = node3;
  node7.right = node11;
  node3.left = node2;
  node3.right = node5;
  node11.right = node17;
  node17.left = node13;
  node43.left = node23;
  node43.right = node47;
  node47.right = node53;
  node23.right = node37;
  node37.left = node29;
  node37.right = node41;
  node29.right = node31;

  expect(findFirstGreaterThanK(node19, 23)).toBe(29);
  expect(findFirstGreaterThanK(node19, 41)).toBe(43);
});
