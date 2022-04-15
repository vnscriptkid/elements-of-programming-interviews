export class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function printLinkedlistInReverse(node: Node): number[] {
  const stack = [];
  const result: number[] = [];

  let cur: Node | null = node;
  while (cur !== null) {
    stack.push(cur);
    cur = cur.next;
  }

  while (stack.length > 0) {
    result.push(stack.pop()!.value);
  }

  return result;
}
