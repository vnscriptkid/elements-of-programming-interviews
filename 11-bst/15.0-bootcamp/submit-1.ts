class Node<T> {
  data: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(
    data: T,
    left: Node<T> | null = null,
    right: Node<T> | null = null
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function searchBst(
  root: Node<number> | null,
  key: number
): Node<number> | null {
  if (root === null || root.data === key) {
    return root;
  }

  return key < root.data
    ? searchBst(root.left, key)
    : searchBst(root.right, key);
}

export { Node, searchBst };
