import { isSymmetric, Node } from "./submit-1";

test("it works 1", () => {
  const node314 = new Node(314);
  const node6Left = new Node(6);
  const node6Right = new Node(6);
  const node2Left = new Node(2);
  const node2Right = new Node(2);
  const node3Left = new Node(3);
  const node3Right = new Node(3);

  node314.left = node6Left;
  node314.right = node6Right;

  node6Left.right = node2Left;
  node6Right.left = node2Right;

  node2Left.right = node3Left;
  node2Right.left = node3Right;

  expect(isSymmetric(node314)).toBe(true);
});

test("it works 2", () => {
  const node314 = new Node(314);
  const node6Left = new Node(6);
  const node6Right = new Node(6);
  const node561 = new Node(561);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node1 = new Node(1);

  node314.left = node6Left;
  node314.right = node6Right;

  node6Left.right = node561;
  node6Right.left = node2;

  node561.right = node3;
  node2.left = node1;

  expect(isSymmetric(node314)).toBe(false);
});

test("it works 3", () => {
  const node314 = new Node(314);
  const node6Left = new Node(6);
  const node6Right = new Node(6);
  const node561Left = new Node(561);
  const node561Right = new Node(561);
  const node3 = new Node(3);

  node314.left = node6Left;
  node314.right = node6Right;

  node6Left.right = node561Left;
  node6Right.left = node561Right;

  node561Left.right = node3;

  expect(isSymmetric(node314)).toBe(false);
});
