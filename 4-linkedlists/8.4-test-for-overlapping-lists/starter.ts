// TEST FOR OVERLAPPING LISTS—LISTS ARE CYCLE-FREE

// Write a program that takes two cycle-free singly linked lists,
// and determines if there exists a node that is common to both lists.

export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export function overlappingNoCycleLists(
  L1: ListNode<number>,
  L2: ListNode<number>
): ListNode<number> {
  return new ListNode(0);
}
