import { hasPathSum, TreeNode } from "./submit-1";

//          10
//         /  \
//        2    7
//       / \    \
//      4   6    8
//       \
//        3
//      (19)(18)  (25)

test("it works", () => {
  const node6 = new TreeNode(6);
  const node8 = new TreeNode(8);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4, null, node3);
  const node7 = new TreeNode(7, null, node8);
  const node2 = new TreeNode(2, node4, node6);
  const node10 = new TreeNode(10, node2, node7);

  expect(hasPathSum(node10, 19)).toEqual(true);
  expect(hasPathSum(node10, 18)).toEqual(true);
  expect(hasPathSum(node10, 25)).toEqual(true);
  expect(hasPathSum(node10, 20)).toEqual(false);
  expect(hasPathSum(node10, 21)).toEqual(false);
  expect(hasPathSum(node10, 22)).toEqual(false);
});
