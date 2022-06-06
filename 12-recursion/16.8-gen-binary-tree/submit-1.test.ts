import { generateAllBinaryTrees } from "./submit-1";

test("it works", () => {
  const result = generateAllBinaryTrees(3);
  expect(result).toHaveLength(5);
  const [tree1, tree2, tree3, tree4, tree5] = result;

  // 1
  //  \
  //   2
  //    \
  //     3
  expect(tree1?.value).toEqual(1);
  expect(tree1?.left).toBeNull();
  expect(tree1?.right?.value).toEqual(2);
  expect(tree1?.right?.left).toBeNull();
  expect(tree1?.right?.right?.value).toEqual(3);

  //   1
  //    \
  //     3
  //    /
  //   2
  expect(tree2?.value).toEqual(1);
  expect(tree2?.left).toBeNull();
  expect(tree2?.right?.value).toEqual(3);
  expect(tree2?.right?.left?.value).toEqual(2);
  expect(tree2?.right?.right).toBeNull();

  //   2
  //  / \
  // 1   3
  expect(tree3?.value).toEqual(2);
  expect(tree3?.left?.value).toEqual(1);
  expect(tree3?.right?.value).toEqual(3);

  //   3
  //  /
  // 1
  //  \
  //   2
  expect(tree4?.value).toEqual(3);
  expect(tree4?.right).toBeNull();
  expect(tree4?.left?.value).toEqual(1);
  expect(tree4?.left?.right?.value).toEqual(2);
  expect(tree4?.left?.left).toBeNull();

  //     3
  //    /
  //   2
  //  /
  // 1
  expect(tree5?.value).toEqual(3);
  expect(tree5?.right).toBeNull();
  expect(tree5?.left?.value).toEqual(2);
  expect(tree5?.left?.left?.value).toEqual(1);
  expect(tree5?.left?.right).toBeNull();
});
