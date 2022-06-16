import { evenOddMerge, ListNode } from "./submit-1";

test("it works", () => {
  const node5 = new ListNode(5, null);
  const node4 = new ListNode(4, node5);
  const node3 = new ListNode(3, node4);
  const node2 = new ListNode(2, node3);
  const node1 = new ListNode(1, node2);
  const node0 = new ListNode(0, node1);

  // input: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
  // output: 0 -> 2 -> 4 -> 1 -> 3 -> 5 -> null

  const root = evenOddMerge(node0);

  expect(root).toEqual(node0);
  expect(node0.next).toEqual(node2);
  expect(node2.next).toEqual(node4);
  expect(node4.next).toEqual(node1);
  expect(node1.next).toEqual(node3);
  expect(node3.next).toEqual(node5);
});
