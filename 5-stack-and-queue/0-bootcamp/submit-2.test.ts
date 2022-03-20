import { printLinkedlistInReverse, Node } from "./submit-2";

test("printLinkedlistInReverse", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  node1.next = node2;
  node2.next = node3;
  node3.next = null;

  const result = printLinkedlistInReverse(node1);
  expect(result).toEqual([3, 2, 1]);
});
