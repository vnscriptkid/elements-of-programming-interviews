import { isBst, Node } from "./submit-1";

test("it works 1", () => {
  const node5 = new Node(5);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node2 = new Node(2);
  const node6 = new Node(6);

  node5.left = node3;
  node5.right = node6;

  node3.left = node2;
  node3.right = node4;

  expect(isBst(node5)).toEqual(true);
});

test("it works 1", () => {
  const node5 = new Node(5);
  const node3 = new Node(3);
  const node7 = new Node(7);
  const node2 = new Node(2);
  const node6 = new Node(6);

  node5.left = node3;
  node5.right = node6;

  node3.left = node2;
  node3.right = node7;

  expect(isBst(node5)).toEqual(false);
});
