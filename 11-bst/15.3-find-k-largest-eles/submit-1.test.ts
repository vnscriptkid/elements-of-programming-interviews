import { BSTNode, findKLargestlnBST } from "./submit-1";

test("it works", () => {
  const node19 = new BSTNode(19);
  const node7 = new BSTNode(7);
  const node43 = new BSTNode(43);
  const node3 = new BSTNode(3);
  const node11 = new BSTNode(11);
  const node2 = new BSTNode(2);
  const node5 = new BSTNode(5);
  const node17 = new BSTNode(17);
  const node13 = new BSTNode(13);
  const node23 = new BSTNode(23);
  const node47 = new BSTNode(47);
  const node37 = new BSTNode(37);
  const node53 = new BSTNode(53);
  const node29 = new BSTNode(29);
  const node41 = new BSTNode(41);
  const node31 = new BSTNode(31);

  node19.left = node7;
  node19.right = node43;
  node7.left = node3;
  node7.right = node11;
  node3.left = node2;
  node3.right = node5;
  node11.right = node17;
  node17.left = node13;
  node43.left = node23;
  node43.right = node47;
  node47.right = node53;
  node23.right = node37;
  node37.left = node29;
  node37.right = node41;
  node29.right = node31;

  expect(findKLargestlnBST(node19, 3)).toEqual([53, 47, 43]);
});
