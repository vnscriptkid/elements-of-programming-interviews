// DELETE A NODE FROM A SINGLY LINKED LIST

// Given a node in a singly linked list, deleting it in 0(1) time appears impossible
// because its predecessor's next field has to be updated.

// Surprisingly, it can be done with one small caveat—the node to delete cannot be
// the last one in the list and it is easy to copy the value part of a node.

// Write a program which deletes a node in a singly linked list.
// The input node is guaranteed not to be the tail node.

export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

export function deletionFromList(nodeToDelete: ListNode) {}
