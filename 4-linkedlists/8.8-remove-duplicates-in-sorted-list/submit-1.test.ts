import { removeDuplicates, ListNode } from "./submit-1";

test("it works", () => {
  const node1 = new ListNode(2);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(5);
  const node5 = new ListNode(7);
  const node6 = new ListNode(11);
  const node7 = new ListNode(11);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  // 1    2    3    4    5    6     7
  // 2 -> 2 -> 3 -> 5 -> 7 -> 11 -> 11 -> null;
  const root = removeDuplicates(node1);

  // 1         3    4    5          7
  // 2 ------> 3 -> 5 -> 7 -------> 11 -> null

  expect(root).toEqual(node1);
  expect(node1.next).toEqual(node3);
  expect(node3.next).toEqual(node4);
  expect(node4.next).toEqual(node5);
  expect(node5.next).toEqual(node7);
  expect(node7.next).toEqual(null);
});
