import {
  PostingListNode,
  setJumpOrderIteratively,
  setJumpOrderRecursively,
} from "./submit-1";

test("it works recursively 1", () => {
  const nodeA = new PostingListNode("a");
  const nodeB = new PostingListNode("b");
  const nodeC = new PostingListNode("c");
  const nodeD = new PostingListNode("d");

  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;

  nodeA.jump = nodeC;
  nodeC.jump = nodeB;
  nodeB.jump = nodeD;
  nodeD.jump = nodeD;

  setJumpOrderRecursively(nodeA);

  expect(nodeA.order).toEqual(0);
  expect(nodeC.order).toEqual(1);
  expect(nodeB.order).toEqual(2);
  expect(nodeD.order).toEqual(3);
});

test("it works recursively 2", () => {
  const nodeA = new PostingListNode("a");
  const nodeB = new PostingListNode("b");
  const nodeC = new PostingListNode("c");
  const nodeD = new PostingListNode("d");

  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;

  nodeA.jump = nodeC;
  nodeC.jump = nodeC;
  nodeB.jump = nodeD;
  nodeD.jump = nodeD;

  setJumpOrderRecursively(nodeA);

  expect(nodeA.order).toEqual(0);
  expect(nodeC.order).toEqual(1);
  expect(nodeD.order).toEqual(2);
  expect(nodeB.order).toEqual(3);
});

test("it works iteratively 1", () => {
  const nodeA = new PostingListNode("a");
  const nodeB = new PostingListNode("b");
  const nodeC = new PostingListNode("c");
  const nodeD = new PostingListNode("d");

  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;

  nodeA.jump = nodeC;
  nodeC.jump = nodeB;
  nodeB.jump = nodeD;
  nodeD.jump = nodeD;

  setJumpOrderIteratively(nodeA);

  expect(nodeA.order).toEqual(0);
  expect(nodeC.order).toEqual(1);
  expect(nodeB.order).toEqual(2);
  expect(nodeD.order).toEqual(3);
});

test("it works iteratively 2", () => {
  const nodeA = new PostingListNode("a");
  const nodeB = new PostingListNode("b");
  const nodeC = new PostingListNode("c");
  const nodeD = new PostingListNode("d");

  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeD;

  nodeA.jump = nodeC;
  nodeC.jump = nodeC;
  nodeB.jump = nodeD;
  nodeD.jump = nodeD;

  setJumpOrderIteratively(nodeA);

  expect(nodeA.order).toEqual(0);
  expect(nodeC.order).toEqual(1);
  expect(nodeD.order).toEqual(2);
  expect(nodeB.order).toEqual(3);
});
