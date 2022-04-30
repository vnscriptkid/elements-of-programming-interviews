import { sumRootToLeaf, TreeNode } from "./submit-1";

test("it works", () => {
  const a = new TreeNode(1);
  const b = new TreeNode(0);
  const c = new TreeNode(0);
  const d = new TreeNode(0);

  const e = new TreeNode(1);
  const f = new TreeNode(1);
  const g = new TreeNode(1);
  const h = new TreeNode(0);

  const i = new TreeNode(1);
  const j = new TreeNode(0);
  const k = new TreeNode(0);
  const l = new TreeNode(1);

  const m = new TreeNode(1);
  const n = new TreeNode(0);
  const o = new TreeNode(0);
  const p = new TreeNode(0);

  a.left = b;
  a.right = i;

  b.left = c;
  b.right = f;

  c.left = d;
  c.right = e;

  f.right = g;
  g.left = h;

  i.left = j;
  i.right = o;

  j.right = k;
  k.left = l;
  k.right = n;

  l.right = m;
  o.right = p;

  // 1000 => 2^3 = 8
  // 1001 => 2^3 + 2^0 = 9
  // 10110 => 2^4 + 2^2 + 2^1 = 16 + 4 + 2 = 22
  // 110011 => 51
  // 11000 = 24
  // 1100 = 12

  expect(sumRootToLeaf(a)).toEqual(126);
});
