// REMOVE THE KTH LAST ELEMENT FROM A LIST

// Without knowing the length of a linked list, it is not trivial to delete the kth last element in a singly linked list.
// Given a singly linked list and an integer k, write a program to remove the kth last element from the list.

// Your algorithm cannot use more than a few words of storage
// regardless of the length of the list.
// In particular you cannot assume that it is possible to record the length of the list.

export class ListNode {
  value: number;
  left: ListNode | null;
  right: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Assumes L has at least k nodes, deletes the k-th last node in L.
export function removeKthLast(list: ListNode, k: number) {}
