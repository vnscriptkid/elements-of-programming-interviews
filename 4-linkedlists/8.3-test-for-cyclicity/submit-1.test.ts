import { hasCycle, Node } from "./submit-1";

test("it works 1", () => {
  // 1 -> 2 -> 3 -> 4
  //       ^        |
  //       |________|

  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2;

  expect(hasCycle(node1)).toEqual(node2);
});

test("it works 2", () => {
  // 1 -> 2 -> 3 -> 4 -> null

  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = null;

  expect(hasCycle(node1)).toEqual(null);
});
