import { rebuildBSTFromPreorder, BSTNode } from "./submit-1";

test("it works", () => {
  //      5
  //     / \
  //    3   8
  //     \
  //      4

  // preorder: [ROOT] LEFT RIGHT
  // [5,3,4,8]
  const result = rebuildBSTFromPreorder([5, 3, 4, 8]);

  const node5 = new BSTNode(5);
  const node3 = new BSTNode(3);
  const node8 = new BSTNode(8);
  const node4 = new BSTNode(4);
  node5.left = node3;
  node5.right = node8;
  node3.right = node4;
  expect(result).toEqual(node5);
});

test("it works", () => {
  //      5
  //     / \
  //    2   8
  //   / \
  //  1   4
  //     /
  //    3

  // preorder: [ROOT] LEFT RIGHT
  // [5,2,1,4,3,8]
  const result = rebuildBSTFromPreorder([5, 2, 1, 4, 3, 8]);

  const node5 = new BSTNode(5);
  const node2 = new BSTNode(2);
  const node1 = new BSTNode(1);
  const node3 = new BSTNode(3);
  const node8 = new BSTNode(8);
  const node4 = new BSTNode(4);

  node5.left = node2;
  node5.right = node8;
  node2.left = node1;
  node2.right = node4;
  node4.left = node3;
  node5.right = node8;

  expect(result).toEqual(node5);
});
