import { preorderTraversal, TreeNode } from "./submit-1";

test("it works", () => {
  const nodeH = new TreeNode("H");
  const nodeI = new TreeNode("I");
  const nodeE = new TreeNode("E");
  const nodeD = new TreeNode("D", nodeH, nodeI);
  const nodeF = new TreeNode("F");
  const nodeJ = new TreeNode("J");
  const nodeG = new TreeNode("G", nodeJ);
  const nodeC = new TreeNode("C", nodeF, nodeG);
  const nodeB = new TreeNode("B", nodeD, nodeE);
  const nodeA = new TreeNode("A", nodeB, nodeC);

  //           A
  //          / \
  //         B   C
  //        /\   /\
  //       D  E F  G
  //      /\      /
  //     H  I    J

  // ROOT LEFT RIGHT

  const ordering = preorderTraversal(nodeA);
  expect(ordering).toEqual("ABDHIECFGJ");
});
