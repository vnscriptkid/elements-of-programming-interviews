import { deletionFromList, ListNode } from "./submit-1";

test("it works", () => {
  const node4 = new ListNode(4);
  const node3 = new ListNode(3, node4);
  const node2 = new ListNode(2, node3);
  const node1 = new ListNode(1, node2);

  // 1 -> 2 -> 3 -> 4
  //      x

  // 1 -> 3 ->  (3 ->) 4

  deletionFromList(node2);

  console.log({ node1 });

  expect(node1.value).toEqual(1);
  expect(node1.next?.value).toEqual(3);
  expect(node1.next?.next?.value).toEqual(4);
  expect(node1.next?.next?.next).toEqual(null);
});
