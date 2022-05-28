import { BinarySearchTree, BinarySearchTreeNode } from "./bst";

test("it works", () => {
  const tree = new BinarySearchTree();

  // "x", 30
  // tree.insert(30, "x");
  // tree.insert(10, "a");
  // tree.insert(15, "b");
  // tree.insert(12, "c");
  // tree.insert(40, "d");
  // tree.insert(35, "e");
  // tree.insert(50, "f");
  const nodeX = new BinarySearchTreeNode("x", 30);
  tree.insertNode(nodeX);
  const nodeA = new BinarySearchTreeNode("a", 10);
  tree.insertNode(nodeA);
  const nodeB = new BinarySearchTreeNode("b", 15);
  tree.insertNode(nodeB);
  const nodeC = new BinarySearchTreeNode("c", 12);
  tree.insertNode(nodeC);
  const nodeD = new BinarySearchTreeNode("d", 40);
  tree.insertNode(nodeD);
  const nodeE = new BinarySearchTreeNode("e", 35);
  tree.insertNode(nodeE);
  const nodeF = new BinarySearchTreeNode("f", 50);
  tree.insertNode(nodeF);

  //     30
  //   /    \
  //  10     40
  //   \     / \
  //    15  35 50
  //   /
  //  12

  //      x
  //   /     \
  //  a       d
  //   \     / \
  //    b   e   f
  //   /
  //  c

  // [NODE L R]
  const order1 = [...tree.preOrderTraversal()].map((x) => x.count);
  // [30, 10, 15, 12, 40, 35, 50]
  expect(order1).toEqual([30, 10, 15, 12, 40, 35, 50]);

  const order2 = [...tree.inOrderTraversal()].map((x) => x.count);
  // [10, 12, 15, 30, 35, 40, 50]
  expect(order2).toEqual([10, 12, 15, 30, 35, 40, 50]);

  const order3 = [...tree.postOrderTraversal()].map((x) => x.count);
  // [12, 15, 10, 35, 50, 40, 30]
  expect(order3).toEqual([12, 15, 10, 35, 50, 40, 30]);

  // tree.root.value;                // 30
  expect(tree?.root?.count).toEqual(30);
  // tree.root.hasChildren;          // true
  expect(tree?.root?.hasChildren).toEqual(true);

  tree.root = tree.removeNode(nodeC); // 12
  //     30
  //   /    \
  //  10     40
  //   \     / \
  //    15  35 50

  let order1Now = [...tree.preOrderTraversal()].map((x) => x.count);
  expect(order1Now).toEqual([30, 10, 15, 40, 35, 50]);

  tree.root = tree.root = tree.removeNode(nodeA); // 10

  //     30
  //   /    \
  //  15     40
  //         / \
  //        35 50

  order1Now = [...tree.preOrderTraversal()].map((x) => x.count);
  expect(order1Now).toEqual([30, 15, 40, 35, 50]);

  tree.root = tree.removeNode(nodeD); // 40

  //     30
  //   /    \
  //  15     50
  //         /
  //        35

  order1Now = [...tree.preOrderTraversal()].map((x) => x.count);
  expect(order1Now).toEqual([30, 15, 50, 35]);

  tree.root = tree.removeNode(nodeB); // 15

  //     30
  //        \
  //         50
  //         /
  //        35

  order1Now = [...tree.preOrderTraversal()].map((x) => x.count);
  expect(order1Now).toEqual([30, 50, 35]);

  tree.root = tree.removeNode(nodeX); // 30

  //          50
  //         /
  //        35

  order1Now = [...tree.preOrderTraversal()].map((x) => x.count);
  expect(order1Now).toEqual([50, 35]);
});
