import { Node } from "./submit-2";

test("search", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  node1.next = node2;
  node2.next = node3;
  node3.next = null;

  expect(Node.search(node1, 3)).toEqual(node3);
  expect(Node.search(node1, 2)).toEqual(node2);
  expect(Node.search(node1, 4)).toEqual(null);
});

test("insertAfter", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  node1.next = node2;
  node2.next = node3;
  node3.next = null;

  const node4 = new Node(4);
  Node.insertAfter(node2, node4);

  expect(node2.next).toEqual(node4);
  expect(node4.next).toEqual(node3);
});

test("delete", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  node1.next = node2;
  node2.next = node3;
  node3.next = null;

  Node.delete(node1);
  expect(node1.next).toEqual(node3);
});
