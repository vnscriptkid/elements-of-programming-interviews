export class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function searchBst(node: Node | null, key: number): Node | null {
  if (node === null) return null;

  if (node.value === key) return node;

  return key < node.value
    ? searchBst(node.left, key)
    : searchBst(node.right, key);
}
