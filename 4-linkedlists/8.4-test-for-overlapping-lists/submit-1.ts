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
): ListNode<number> | null {
  const l1Length = findLength(L1);
  const l2Length = findLength(L2);

  let diff = Math.abs(l1Length - l2Length);

  let p1 = L1,
    p2 = L2;

  if (l1Length > l2Length) {
    p1 = move(L1, diff);
    p2 = L2;
  } else if (l2Length > l1Length) {
    p1 = move(L2, diff);
    p2 = L1;
  }

  return goesInTandem(p1, p2);
}

function findLength(L1: ListNode<number>) {
  let length = 0;
  let cur: ListNode<number> | null = L1;
  while (cur !== null) {
    length++;
    cur = cur.next;
  }
  return length;
}

function move(L1: ListNode<number>, steps: number): ListNode<number> {
  let cur = L1;

  while (steps > 0) {
    cur = cur.next!;
    steps--;
  }

  return cur;
}
function goesInTandem(
  p1: ListNode<number>,
  p2: ListNode<number>
): ListNode<number> | null {
  while (p1 !== p2) {
    p1 = p1.next!;
    p2 = p2.next!;
  }

  return p1;
}
