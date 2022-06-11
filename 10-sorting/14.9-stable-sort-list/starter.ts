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

export function stableSortList(list: ListNode<number>) {}
