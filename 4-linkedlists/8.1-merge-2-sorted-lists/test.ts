import { merge, Node } from "./submit-1";

test("merge", () => {
  const node2 = new Node(2);
  const node5 = new Node(5);
  const node7 = new Node(7);
  node2.next = node5;
  node5.next = node7;
  node7.next = null;

  const node3 = new Node(3);
  const node11 = new Node(11);
  node3.next = node11;
  node11.next = null;

  merge(node2, node3);

  expect(node2.next).toEqual(node3);
  expect(node3.next).toEqual(node5);
  expect(node5.next).toEqual(node7);
  expect(node7.next).toEqual(node11);
  expect(node11.next).toEqual(null);
});
