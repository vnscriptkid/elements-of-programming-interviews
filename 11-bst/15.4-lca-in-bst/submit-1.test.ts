import { BSTNode, findLCA } from "./submit-1";

test("it works 1", () => {
  //     8
  //    / \
  //   4   9
  //  / \
  //(1)  6
  //     /\
  //   (5) 7
  const node8 = new BSTNode(8);
  const node4 = new BSTNode(4);
  const node9 = new BSTNode(9);
  const node1 = new BSTNode(1);
  const node6 = new BSTNode(6);
  const node5 = new BSTNode(5);
  const node7 = new BSTNode(7);

  node8.left = node4;
  node8.right = node9;

  node4.left = node1;
  node4.right = node6;

  node6.left = node5;
  node6.right = node7;

  expect(findLCA(node8, node1, node5)).toEqual(node4);
});

test("it works 1", () => {
  //     8
  //    / \
  // (4)   9
  //  / \
  // 1   6
  //     /\
  //   (5) 7
  const node8 = new BSTNode(8);
  const node4 = new BSTNode(4);
  const node9 = new BSTNode(9);
  const node1 = new BSTNode(1);
  const node6 = new BSTNode(6);
  const node5 = new BSTNode(5);
  const node7 = new BSTNode(7);

  node8.left = node4;
  node8.right = node9;

  node4.left = node1;
  node4.right = node6;

  node6.left = node5;
  node6.right = node7;

  expect(findLCA(node8, node4, node5)).toEqual(node4);
});

test("it works 1", () => {
  //     8
  //    / \
  // (4)   9
  //  / \
  //(1)   6
  //     /\
  //    5  7
  const node8 = new BSTNode(8);
  const node4 = new BSTNode(4);
  const node9 = new BSTNode(9);
  const node1 = new BSTNode(1);
  const node6 = new BSTNode(6);
  const node5 = new BSTNode(5);
  const node7 = new BSTNode(7);

  node8.left = node4;
  node8.right = node9;

  node4.left = node1;
  node4.right = node6;

  node6.left = node5;
  node6.right = node7;

  expect(findLCA(node8, node1, node4)).toEqual(node4);
});
