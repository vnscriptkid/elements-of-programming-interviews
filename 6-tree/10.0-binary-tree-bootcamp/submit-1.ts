class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function inorder(root: TreeNode<string> | null, buffer: string[] = []): string {
  // INorder
  // left (ROOT) right

  if (!root) {
    return "";
  }

  if (!root.left && !root.right) {
    // leaf node
    buffer.push(root.val);
    return "";
  }

  inorder(root.left, buffer);

  buffer.push(root.val);

  inorder(root.right, buffer);

  return buffer.join("");
}

function preorder(
  root: TreeNode<string> | null,
  buffer: string[] = []
): string {
  // PREorder
  // (ROOT) left right

  if (!root) return "";

  if (!root.left && !root.right) {
    buffer.push(root.val);
    return "";
  }

  buffer.push(root.val);

  preorder(root.left, buffer);

  preorder(root.right, buffer);

  return buffer.join("");
}

function postorder(
  root: TreeNode<string> | null,
  buffer: string[] = []
): string | undefined {
  // POSTorder
  // left right (ROOT)

  if (!root) return;

  if (!root.left && !root.right) {
    buffer.push(root.val);
    return;
  }

  postorder(root.left, buffer);

  postorder(root.right, buffer);

  buffer.push(root.val);

  return buffer.join("");
}

export { TreeNode, inorder, preorder, postorder };
