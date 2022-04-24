import { BinaryTree, LCA } from "./submit-1";

test("it works", () => {
  //          1
  //         / \
  //        2   3
  //           / \
  //          4   5
  //             /
  //            6

  const node1 = new BinaryTree(1);
  const node2 = new BinaryTree(2);
  const node3 = new BinaryTree(3);
  const node4 = new BinaryTree(4);
  const node5 = new BinaryTree(5);
  const node6 = new BinaryTree(6);

  node1.left = node2;
  node1.right = node3;

  node2.parent = node1;
  node3.parent = node1;

  node3.left = node4;
  node3.right = node5;

  node4.parent = node3;
  node5.parent = node3;

  node5.left = node6;
  node6.parent = node5;

  expect(LCA(node4, node6)).toEqual(node3);
});
