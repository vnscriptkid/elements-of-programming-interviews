import { BinarySearchTree } from "./submit-1";

test("it works", () => {
  const tree = new BinarySearchTree();
  tree.insert(8);
  // 8
  tree.insert(15);
  //   8
  //    \
  //     15
  tree.insert(13);
  //   8
  //    \
  //     15
  //     /
  //    13
  tree.insert(16);
  //   8
  //    \
  //     15
  //     / \
  //    13  16
  tree.insert(4);
  //           8
  //         /   \
  //        4    15
  //             / \
  //            13  16
  tree.insert(5);
  //           8
  //         /   \
  //        4    15
  //         \   / \
  //          5 13  16

  expect(tree.root?.data).toEqual(8);
  expect(tree.root?.left?.data).toEqual(4);
  expect(tree.root?.right?.data).toEqual(15);
  expect(tree.root?.left?.left).toEqual(null);
  expect(tree.root?.left?.right?.data).toEqual(5);
  expect(tree.root?.right?.left?.data).toEqual(13);
  expect(tree.root?.right?.right?.data).toEqual(16);

  tree.delete(5);
  //           8
  //         /   \
  //        4    15
  //             / \
  //            13  16
  expect(tree.root?.data).toEqual(8);
  expect(tree.root?.left?.data).toEqual(4);
  expect(tree.root?.right?.data).toEqual(15);
  expect(tree.root?.left?.left).toEqual(null);
  expect(tree.root?.left?.right).toEqual(null);
  expect(tree.root?.right?.left?.data).toEqual(13);
  expect(tree.root?.right?.right?.data).toEqual(16);

  tree.delete(8);
  //           13
  //         /   \
  //        4     15
  //               \
  //                16
  expect(tree.root?.data).toEqual(13);
  expect(tree.root?.left?.data).toEqual(4);
  expect(tree.root?.right?.data).toEqual(15);
  expect(tree.root?.left?.left).toEqual(null);
  expect(tree.root?.left?.right).toEqual(null);
  expect(tree.root?.right?.left).toEqual(null);
  expect(tree.root?.right?.right?.data).toEqual(16);

  tree.delete(15);
  //           13
  //         /   \
  //        4     16
  expect(tree.root?.data).toEqual(13);
  expect(tree.root?.left?.data).toEqual(4);
  expect(tree.root?.right?.data).toEqual(16);
  expect(tree.root?.left?.left).toEqual(null);
  expect(tree.root?.left?.right).toEqual(null);
  expect(tree.root?.right?.left).toEqual(null);
  expect(tree.root?.right?.right).toEqual(null);
});
