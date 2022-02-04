class Node<T> {
  val: T;
  next: Node<T>;

  constructor(val: T, next = null) {
    this.val = val;
    this.next = next;
  }
}

function merge(head1: Node<number>, head2: Node<number>) {
  // 2 -> 5 -> 7 -> null
  // ^
  // 3 -> 11 -> null
  // ^

  let cur1 = head1;
  let cur2 = head2;

  let cur3 = null;
  let newHead = null;

  while (cur1 && cur2) {
    const smaller = cur1.val <= cur2.val ? cur1 : cur2;

    if (cur3) {
      cur3.next = smaller;
    } else {
      newHead = smaller;
    }

    cur3 = smaller;

    if (smaller === cur1) cur1 = cur1.next;
    else cur2 = cur2.next;
  }

  if (cur1) {
    cur3.next = cur1;
    cur3 = cur1;
    cur1 = cur1.next;
  }

  if (cur2) {
    cur3.next = cur2;
    cur3 = cur2;
    cur2 = cur2.next;
  }

  return newHead;
}

export { Node, merge };
