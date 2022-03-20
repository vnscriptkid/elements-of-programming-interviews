class Node<T> {
  val: T;
  next: Node<T> | null;

  constructor(val: T, next = null) {
    this.val = val;
    this.next = next;
  }

  /**
   * @param  {Node<number>} head
   * @param  {number} key
   * @returns Node
   */
  static search(head: Node<number>, key: number): Node<number> | null {
    let cur: Node<number> | null = head;

    while (cur) {
      if (cur.val === key) return cur;

      cur = cur.next;
    }

    return null;
  }

  static insertAfter(node: Node<number>, newNode: Node<number>): void {
    const oldNext = node.next;

    node.next = newNode;

    newNode.next = oldNext;
  }

  // delete a node immedidately following a node. Assumes aNode is not a tail
  static deleteRightAfter(aNode: Node<number>) {
    if (aNode.next !== null) {
      aNode.next = aNode.next.next;
    }
  }
}

export { Node };
