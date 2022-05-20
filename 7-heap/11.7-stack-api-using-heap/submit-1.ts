// IMPLEMENT A STACK API USING A HEAP

import { Heap } from "collections/heap";
// We discussed the notion of reduction when describing problem solving patterns.
// Usually, reductions are used to solve a more complex problem using a solution to a simpler problem as a subroutine.

// Occasionally it makes sense to go the other way—for example,
// if we need the functionality of a heap, we can use a BST library, which is more commonly available,
// with modest performance penalties with respect, for example, to an array-based implementation of a heap.

// How would you implement a stack API using a heap?

interface StackAPI<T> {
  push: (value: T) => void;
  pop: () => T | undefined;
}

class Item {
  timestamp: number;
  value: number;

  constructor(value: number, ts: number) {
    this.value = value;
    this.timestamp = ts;
  }
}

export class StackUsingHeap implements StackAPI<number> {
  heap: typeof Heap;
  curTimestamp: number;

  constructor() {
    this.heap = new Heap(
      [],
      null,
      (a: Item, b: Item) => a.timestamp - b.timestamp
    );
    this.curTimestamp = 0;
  }

  push(value: number) {
    this.heap.add(new Item(value, this.curTimestamp++));
  }

  pop(): number | undefined {
    if (this.heap.length === 0) return undefined;

    return this.heap.pop().value;
  }
}
