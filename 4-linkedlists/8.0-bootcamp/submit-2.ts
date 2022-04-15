export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  static search(head: Node<number>, value: number) {
    let cur: Node<number> | null = head;

    while (cur !== null) {
      if (cur.value === value) return cur;

      cur = cur.next;
    }

    return null;
  }

  static insertAfter(node: Node<number>, newNode: Node<number>) {
    let curNext = node.next;

    node.next = newNode;

    newNode.next = curNext;
  }

  // Delete a node immedidately following a node. Assumes aNode is not a tail
  static delete(node: Node<number>) {
    if (node.next !== null) {
      node.next = node.next.next;
    }
  }
}
