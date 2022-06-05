import { buildMinHeightBSTFromSortedArray } from "./submit-1";

test("it works", () => {
  //  0  1  2  3  4   5   6   7   8
  // (2, 3, 5, 7, 11, 13, 17, 19, 23),
  const root = buildMinHeightBSTFromSortedArray([
    2, 3, 5, 7, 11, 13, 17, 19, 23,
  ]);

  expect(root?.value).toEqual(11);
  const node3 = root?.left;
  const node17 = root?.right;

  expect(node3?.value).toEqual(3);
  expect(node17?.value).toEqual(17);

  const node2 = node3?.left;
  const node5 = node3?.right;

  expect(node2?.value).toEqual(2);
  expect(node2?.left).toBeNull();
  expect(node2?.right).toBeNull();
  expect(node5?.value).toEqual(5);
  expect(node5?.left).toBeNull();

  const node7 = node5?.right;
  expect(node7?.value).toEqual(7);
  expect(node7?.left).toBeNull();
  expect(node7?.right).toBeNull();

  const node13 = node17?.left;
  const node19 = node17?.right;
  const node23 = node19?.right;

  expect(node13?.value).toEqual(13);
  expect(node19?.value).toEqual(19);
  expect(node23?.value).toEqual(23);

  expect(node13?.left).toBeNull();
  expect(node13?.right).toBeNull();

  expect(node23?.left).toBeNull();
  expect(node23?.right).toBeNull();

  //        node11
  //        /   \
  //      node3     node17
  //     / \         /   \
  // node2 node5   node13 node19
  //         \                \
  //        node7           node23

  // left === right => new Node(left);
  // left > right => null
});
