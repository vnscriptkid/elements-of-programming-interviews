// import { inorder, TreeNode, preorder, postorder } from "./submit-2";

export class TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// [ROOT] LEFT RIGHT
export function preorder(node: TreeNode | null, buffer: string[] = []) {
  if (node === null) return;

  buffer.push(node.value);

  preorder(node.left, buffer);
  preorder(node.right, buffer);

  return buffer.join("");
}

// LEFT [ROOT] RIGHT
export function inorder(node: TreeNode | null, buffer: string[] = []) {
  if (node === null) return;

  inorder(node.left, buffer);
  buffer.push(node.value);
  inorder(node.right, buffer);

  return buffer.join("");
}

// LEFT RIGHT [ROOT]
export function postorder(node: TreeNode | null, buffer: string[] = []) {
  if (node === null) return;

  postorder(node.left, buffer);
  postorder(node.right, buffer);
  buffer.push(node.value);

  return buffer.join("");
}
