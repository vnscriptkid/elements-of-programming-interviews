import { binaryTreeDepthOrder, BinaryTreeNode } from "./submit-1";

test("it works", () => {
  const node4 = new BinaryTreeNode(4);
  const node5 = new BinaryTreeNode(5);
  const node3 = new BinaryTreeNode(3, null, node5);
  const node2 = new BinaryTreeNode(2, node4);
  const node1 = new BinaryTreeNode(1, node2, node3);

  //         1
  //        / \
  //       2   3
  //      /\  / \
  //     4  n n  5

  expect(binaryTreeDepthOrder(node1)).toEqual([[1], [2, 3], [4, 5]]);
});
