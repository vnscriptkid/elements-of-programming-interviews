// 9.10 IMPLEMENT A QUEUE WITH MAX API

// Implement a queue with enqueue, dequeue, and max operations.
// The max operation returns the maximum element currently stored in the queue.

// Hint: When can an element never be returned by max, regardless of future updates?

interface IQueueWithMax<T> {
  enqueue(value: T): void;
  dequeue(): T | null;
  max(): T | null;
}

class Queue<T> extends Array {
  enqueue(value: T) {
    this.push(value);
  }

  dequeue() {
    return this.shift();
  }
}

export class QueueWithMax implements IQueueWithMax<number> {
  queue = new Queue<number>();
  queueMax = new Queue<number>();

  // queue: 5 1 4
  // queueMax: 5 1 4
  enqueue(value: number): void {
    this.queue.enqueue(value);

    while (
      this.queueMax.length &&
      value > this.queueMax[this.queueMax.length - 1]
    ) {
      this.queueMax.pop();
    }

    this.queueMax.enqueue(value);
  }

  dequeue(): number | null {
    if (this.queue.length) {
      const out = this.queue.dequeue();

      if (out === this.max()) this.queueMax.dequeue();

      return out;
    }

    return null;
  }

  max(): number | null {
    return this.queueMax.length ? this.queueMax[0] : null;
  }
}
