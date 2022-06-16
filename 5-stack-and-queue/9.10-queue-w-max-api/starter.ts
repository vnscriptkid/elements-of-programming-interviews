// 9.10 IMPLEMENT A QUEUE WITH MAX API

// Implement a queue with enqueue, dequeue, and max operations.
// The max operation returns the maximum element currently stored in the queue.

// Hint: When can an element never be returned by max, regardless of future updates?

interface IQueueWithMax<T> {
  enqueue(value: T): void;
  dequeue(): T | null;
  max(): T | null;
}

export class QueueWithMax implements IQueueWithMax<number> {
  enqueue(value: number): void {
    throw new Error("Method not implemented.");
  }
  dequeue(): number | null {
    throw new Error("Method not implemented.");
  }
  max(): number | null {
    throw new Error("Method not implemented.");
  }
}
