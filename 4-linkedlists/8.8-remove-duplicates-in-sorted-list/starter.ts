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
  return new ListNode(1);
}
