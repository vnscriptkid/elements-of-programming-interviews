// REVERSE A SINGLE SUBLIST

// Write a program which takes a singly linked list L and two integers s and f as arguments,
// and reverses the order of the nodes from the sth node to fth node, inclusive.
// The numbering begins at 1, i.e., the head node is the first node. Do not allocate additional nodes.

class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function reverseSublist(list: ListNode, start: number, finish: number) {}
