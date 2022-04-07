import { ListNode, reverseSublist } from "./submit-1";

test("it works", () => {
  //      11 -> 3 -> 5 -> 7 -> 2
  //  idx: 1    2    3    4    5
  // f(list, 2, 4)
  //  => 11 -> 7 -> 5 -> 3 -> 2
  const node11 = new ListNode(11);
  const node3 = new ListNode(3);
  const node5 = new ListNode(5);
  const node7 = new ListNode(7);
  const node2 = new ListNode(2);

  node11.next = node3;
  node3.next = node5;
  node5.next = node7;
  node7.next = node2;

  const newHead = reverseSublist(node11, 2, 4);

  expect(newHead).toEqual(node11);
  expect(node11.next).toEqual(node7);
  expect(node7.next).toEqual(node5);
  expect(node5.next).toEqual(node3);
  expect(node3.next).toEqual(node2);
});
