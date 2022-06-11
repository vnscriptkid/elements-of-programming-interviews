// IMPLEMENT A FAST SORTING ALGORITHM FOR LISTS

// Implement a routine which sorts lists efficiently.
// It should be a stable sort,
// i.e., the relative positions of equal elements must remain unchanged.

export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export function stableSortList(
  list: ListNode<number>
): ListNode<number> | null {
  // 4 -> 2 -> 3 -> 1 -> 5 -> null
  //           ^
  //                     $

  // 1 -> 2 -> null
  //      ^
  //            $

  if (list === null || list.next === null) {
    return list;
  }

  let slow = list,
    fast: ListNode<number> | null = list;
  let preSlow = null;
  while (fast && fast.next) {
    preSlow = slow;
    fast = fast.next.next;
    slow = slow.next!;
  }

  preSlow!.next = null;

  return merge(stableSortList(list), stableSortList(slow));
}

function merge(
  list1: ListNode<number> | null,
  list2: ListNode<number> | null
): ListNode<number> | null {
  // 1 -> 3 -> 4 -> null
  //      ^
  // 2 -> 7 -> 8 -> 9 -> null
  // ^

  // 1
  if (list1 === null) return list2;

  if (list2 === null) return list1;

  if (list1.value <= list2.value) {
    list1.next = merge(list1.next, list2);
    return list1;
  } else {
    list2.next = merge(list1, list2.next);
    return list2;
  }
}

const node5 = new ListNode<number>(5);
const node1 = new ListNode<number>(1, node5);
const node3 = new ListNode<number>(3, node1);
const node2 = new ListNode<number>(2, node3);
const node4 = new ListNode<number>(4, node2);

// 4 -> 2 -> 3 -> 1 -> 5 -> null

const root = stableSortList(node4);
console.log(root);
