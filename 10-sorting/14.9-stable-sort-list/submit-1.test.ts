import { stableSortList, ListNode } from "./submit-1";

test("it works", () => {
  const node5 = new ListNode<number>(5);
  const node1 = new ListNode<number>(1, node5);
  const node3 = new ListNode<number>(3, node1);
  const node2 = new ListNode<number>(2, node3);
  const node4 = new ListNode<number>(4, node2);

  // 4 -> 2 -> 3 -> 1 -> 5 -> null

  const root = stableSortList(node4);

  expect(root).toEqual(node1);
  expect(root?.next).toEqual(node2);
  expect(root?.next?.next).toEqual(node3);
  expect(root?.next?.next?.next).toEqual(node4);
  expect(root?.next?.next?.next?.next).toEqual(node5);
  expect(root?.next?.next?.next?.next?.next).toEqual(null);
});
