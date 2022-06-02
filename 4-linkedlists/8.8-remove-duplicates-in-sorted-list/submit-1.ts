// This problem is concerned with removing duplicates from a sorted list of integers.
// See Figure 8.8 for an example.

// Write a program that takes as input a singly linked list of integers in sorted order,
// and removes duplicates from it. The list should be sorted.

// 2 -> 2 -> 3 -> 5 -> 7 -> 11 -> 11 -> null;

// 2 ------> 3 -> 5 -> 7 -------> 11 -> null

export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicates(list: ListNode): ListNode {
  // 2 -> 2 -> 3 -> 5 -> 7 -> 11 -> 11 -> null;
  //                           ^
  //                                       $
  // headOfSublist: ^
  // cur: $
  // 2 ------> 3 -> 5 -> 7 -------> 11 -> null

  let headOfSublist: ListNode = list;
  let cur: ListNode | null = list;

  cur = cur.next;

  while (cur) {
    if (cur.value !== headOfSublist.value) {
      headOfSublist.next = cur;
      headOfSublist = cur;
    }
    cur = cur.next;
  }

  headOfSublist.next = cur;

  return list;
}
