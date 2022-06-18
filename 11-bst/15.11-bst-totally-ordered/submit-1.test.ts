import { pairIncludesAncestorAndDescendantOfM, BSTNode } from "./submit-1";

test('it works', () => {
    const node19A = new BSTNode(19);
  const node7B = new BSTNode(7);
  const node43I = new BSTNode(43);
  const node3C = new BSTNode(3);
  const node11F = new BSTNode(11);
  const node2D = new BSTNode(2);
  const node5E = new BSTNode(5);
  const node17G = new BSTNode(17);
  const node13H = new BSTNode(13);
  const node23J = new BSTNode(23);
  const node47O = new BSTNode(47);
  const node37K = new BSTNode(37);
  const node53P = new BSTNode(53);
  const node29L = new BSTNode(29);
  const node41N = new BSTNode(41);
  const node31M = new BSTNode(31);

  node19A.left = node7B;
  node19A.right = node43I;
  node7B.left = node3C;
  node7B.right = node11F;
  node3C.left = node2D;
  node3C.right = node5E;
  node11F.right = node17G;
  node17G.left = node13H;
  node43I.left = node23J;
  node43I.right = node47O;
  node47O.right = node53P;
  node23J.right = node37K;
  node37K.left = node29L;
  node37K.right = node41N;
  node29L.right = node31M;

  expect(pairIncludesAncestorAndDescendantOfM(node19A, node37K, node23J)).toEqual(true);
  expect(pairIncludesAncestorAndDescendantOfM(node43I, node31M, node23J)).toEqual(true);
  expect(pairIncludesAncestorAndDescendantOfM(node43I, node53P, node23J)).toEqual(false);
  expect(pairIncludesAncestorAndDescendantOfM(node43I, node23J, node37K)).toEqual(false);
})