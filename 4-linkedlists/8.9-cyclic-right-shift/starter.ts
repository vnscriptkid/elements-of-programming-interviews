// 8.9 IMPLEMENT CYCLIC RIGHT SHIFT FOR SINGLY LINKED LISTS

// This problem is concerned with performing a cyclic right shift on a list.
// Write a program that takes as input a singly linked list
// and a nonnegative integer k, and returns the list cyclically shifted to the right by k.
// See Figure 8.9 for an example of a cyclic right shift.

export class ListNode {
  value: string;
  next: ListNode | null;

  constructor(value: string, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

//  1    2    3    4    5
//  a -> b -> c -> d -> e -> null
// k = 3
// e -> a -> b -> c -> d -> null
// d -> e -> a -> b -> c -> null
// c -> d -> e -> a -> b -> null

export function cyclicallyRightShiftList(head: ListNode, k: number): ListNode {
  // find length of head n
  let n = 0;
  for (let cur: ListNode | null = head; cur !== null; cur = cur.next) {
    n++;
  }
  // normalize k
  k = k % n;

  // locate sublist, prev of sublist (n - k), end of sublist
  let cur: ListNode = head;
  for (let i = 1; i <= n && i !== n - k; i++) {
    cur = cur.next!;
  }
  const prevOfSublist = cur;
  const headOfSublist = cur.next!;

  // locate end of sublist
  while (cur && cur.next !== null) {
    cur = cur.next;
  }
  // cur now is endOfSublist
  cur.next = head;
  prevOfSublist.next = null;

  return headOfSublist;
}
