// BUILD A MINIMUM HEIGHT BST FROM A SORTED ARRAY

// Given a sorted array, the number of BSTs that can be built on the entries i
// n the array grows enormously with its size. Some of these trees are skewed,
// and are closer to lists; others are more balanced. See Figure 15.3 on Page 263 for an example.

// How would you build a BST of minimum possible height from a sorted array?

// (2,3,5,7,11,13,17,19,23),

export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function buildMinHeightBSTFromSortedArray(
  list: number[]
): BSTNode | null {
  //        node11
  //        /   \
  //      node3     node17
  //     / \         /   \
  // node2 node5   node13 node19
  //         \                \
  //        node7           node23

  // left === right => new Node(left);
  // left > right => null

  return helper(list, 0, list.length - 1);
}

function helper(list: number[], left: number, right: number): BSTNode | null {
  if (left > right) return null;

  if (left === right) return new BSTNode(list[left]);

  let middle = Math.floor(left + (right - left) / 2);

  const curRoot = new BSTNode(list[middle]);

  curRoot.left = helper(list, left, middle - 1);
  curRoot.right = helper(list, middle + 1, right);

  return curRoot;
}
