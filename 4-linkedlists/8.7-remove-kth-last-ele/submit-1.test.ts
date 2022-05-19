import { removeKthLast, ListNode } from "./submit-1";

test("it works", () => {
  const node5 = new ListNode(5);
  const node4 = new ListNode(4, node5);
  const node3 = new ListNode(3, node4);
  const node2 = new ListNode(2, node3);
  const node1 = new ListNode(1, node2);

  // 1 -> 2 -> 3 -> 4 -> 5
  //                x
  // 1 -> 2 -> 3 ------> 5

  const root = removeKthLast(node1, 2);

  expect(root.value).toBe(1);
  expect(root.next!.value).toBe(2);
  expect(root.next!.next!.value).toBe(3);
  expect(root.next!.next!.next!.value).toBe(5);
  expect(root.next!.next!.next!.next).toBe(null);
});
