import { inorder, TreeNode, preorder, postorder } from "./submit-2";

describe("traversals", () => {
  const nodeA = new TreeNode("A");
  const nodeB = new TreeNode("B");
  const nodeC = new TreeNode("C");
  const nodeD = new TreeNode("D");
  const nodeE = new TreeNode("E");
  const nodeF = new TreeNode("F");
  const nodeG = new TreeNode("G");
  const nodeH = new TreeNode("H");
  const nodeI = new TreeNode("I");
  const nodeJ = new TreeNode("J");

  nodeA.left = nodeB;
  nodeA.right = nodeC;
  nodeB.left = nodeD;
  nodeB.right = nodeE;
  nodeD.left = nodeH;
  nodeD.right = nodeI;

  nodeC.left = nodeF;
  nodeC.right = nodeG;
  nodeG.left = nodeJ;

  test("inorder", () => {
    const ordering = inorder(nodeA);
    expect(ordering).toEqual("HDIBEAFCJG");
  });

  test("preorder", () => {
    const ordering = preorder(nodeA);
    expect(ordering).toEqual("ABDHIECFGJ");
  });

  test("postorder", () => {
    const ordering = postorder(nodeA);
    expect(ordering).toEqual("HIDEBFJGCA");
  });
});
