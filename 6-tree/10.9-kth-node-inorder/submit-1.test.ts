import { findKthNodeBinaryTree, BinaryTreeNode } from "./submit-1";

test("it works", () => {
  const nodeH = new BinaryTreeNode("H", null, null, 0);
  const nodeI = new BinaryTreeNode("I", null, null, 0);
  const nodeE = new BinaryTreeNode("E", null, null, 0);
  const nodeD = new BinaryTreeNode("D", nodeH, nodeI, 2);
  const nodeF = new BinaryTreeNode("F", null, null, 0);
  const nodeJ = new BinaryTreeNode("J", null, null, 0);
  const nodeG = new BinaryTreeNode("G", nodeJ, null, 1);
  const nodeC = new BinaryTreeNode("C", nodeF, nodeG, 3);
  const nodeB = new BinaryTreeNode("B", nodeD, nodeE, 4);
  const nodeA = new BinaryTreeNode("A", nodeB, nodeC, 9);

  //           A
  //          / \
  //         B   C
  //        /\   /\
  //       D  E F  G
  //      /\      /
  //     H  I    J

  expect(findKthNodeBinaryTree(nodeA, 4)).toEqual(nodeB);
  expect(findKthNodeBinaryTree(nodeA, 5)).toEqual(nodeE);
  expect(findKthNodeBinaryTree(nodeA, 6)).toEqual(nodeA);
  expect(findKthNodeBinaryTree(nodeA, 7)).toEqual(nodeF);
  expect(findKthNodeBinaryTree(nodeA, 9)).toEqual(nodeJ);
});
