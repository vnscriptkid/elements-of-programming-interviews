// REVERSE A SINGLE SUBLIST

// Write a program which takes a singly linked list L and two integers s and f as arguments,
// and reverses the order of the nodes from the sth node to fth node, inclusive.
// The numbering begins at 1, i.e., the head node is the first node. Do not allocate additional nodes.

export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function reverseSublist(
  head: ListNode,
  start: number,
  finish: number
): ListNode {
  //      dummy -> 11 -> 3 -> 5 -> 7 -> 2
  //                     c
  //               p
  //  idx: 0   ->   1    2    3    4    5

  // f(list, 2, 4)

  const dummy = new ListNode(-1);
  dummy.next = head;
  let i = 0;
  let prev = null;
  let cur: ListNode | null = dummy;

  let prevSublist = null;
  let oldHeadSublist = null;
  // keep track of node at start - 1
  while (i < start && cur !== null) {
    prev = cur;
    cur = cur.next;
    i++;
  }

  // i === start
  oldHeadSublist = cur;
  prevSublist = prev;

  prev = null;
  while (cur !== null && i <= finish) {
    let temp = cur.next;
    cur.next = prev;

    prev = cur;
    cur = temp;
    i++;
  }

  // i === finish + 1
  prevSublist!.next = prev;
  oldHeadSublist!.next = cur;

  return head;
}
