class Node<T> {
  val: T;
  next: Node<T> | null;

  constructor(val: T, next: Node<T> = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack<T> {
  data: T[];

  constructor() {
    this.data = [];
  }

  push(val: T) {
    return this.data.push(val);
  }

  pop(): T {
    return this.data.pop();
  }

  get empty(): boolean {
    return this.data.length === 0;
  }
}

function printLinkedlistInReverse(head: Node<number>): number[] {
  const stack = new Stack<number>();

  // 1 -> 2 -> 3 -> null;
  //           ^

  // [1, 2, 3]
  let cur = head;

  while (cur) {
    stack.push(cur.val);

    cur = cur.next;
  }

  const output = [];

  while (!stack.empty) {
    output.push(stack.pop());
  }

  return output;
}

export { Node, printLinkedlistInReverse };
