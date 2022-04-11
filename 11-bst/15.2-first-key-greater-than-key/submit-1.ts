// FIND THE FIRST KEY GREATER THAN A GIVEN VALUE IN A BST

// Write a program that takes as input a BST and a value,
// and returns the first key that would appear in an inorder traversal which is
// greater than the input value.
// For example, when applied to the BST in Figure 15.1 on Page 255 you should return 29 for input 23.

// tree.png
// 23 => 29
// 41 => 43

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

export function findFirstGreaterThanK(root: Node, k: number) {
  let cur: Node | null = root,
    lastCandidate: null | number = null;

  while (cur !== null) {
    if (cur.value <= k) {
      cur = cur.right;
    } else {
      lastCandidate = cur.value;
      cur = cur.left;
    }
  }

  return lastCandidate;
}

// export function findFirstGreaterThanK(root: Node, k: number) {
//   // left [root] right
//   function inorder(
//     node: Node | null,
//     prev = { value: Infinity },
//     result = { value: Infinity }
//   ) {
//     if (!node) return;

//     if (!node.left && !node.right) {
//       // leaf node
//       if (prev.value === k) result.value = node.value;
//       else if (node.value === k) prev.value = k;
//       return;
//     }

//     inorder(node.left, prev, result);

//     // visit root node
//     if (prev.value === k) result.value = node.value;
//     else if (node.value === k) prev.value = k;

//     inorder(node.right, prev, result);

//     return result.value;
//   }

//   return inorder(root);
// }
