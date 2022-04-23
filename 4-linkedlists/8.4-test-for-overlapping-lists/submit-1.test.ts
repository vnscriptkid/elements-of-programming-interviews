import { ListNode, overlappingNoCycleLists } from "./submit-1";

test("it works 1", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);
  const node6 = new ListNode(6);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node6.next = node3;

  const L1 = node1;
  const L2 = node6;

  expect(overlappingNoCycleLists(L1, L2)).toEqual(node3);
});
