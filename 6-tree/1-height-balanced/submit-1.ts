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

function height(node: Node): number {
  if (node === null) return 0;

  return 1 + Math.max(height(node.left!), height(node.right!));
}

export function isBalanced(node: Node): boolean {
  if (node === null) return false;

  return Math.abs(height(node.left!) - height(node.right!)) <= 1;
}
