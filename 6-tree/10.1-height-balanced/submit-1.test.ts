import { Node, isBalanced } from "./submit-1";

test("isBalanced 1", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  node1.left = node2;
  expect(isBalanced(node1)).toBe(true);
});

test("isBalanced 2", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  node1.left = node2;
  node2.left = node3;
  expect(isBalanced(node1)).toBe(false);
});
