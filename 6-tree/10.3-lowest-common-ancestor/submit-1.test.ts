import { lca, TreeNode } from "./submit-1";

test("it works", () => {
  //          1
  //         / \
  //        2   3
  //           / \
  //          4   5
  //             /
  //            6

  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);

  node1.left = node2;
  node1.right = node3;
  node3.left = node4;
  node3.right = node5;
  node5.left = node6;

  expect(lca(node1, node4, node6)).toEqual(node3);
});
