// 9.9 IMPLEMENT A QUEUE USING STACKS

// Queue insertion and deletion follows first-in, first-out semantics;
// stack insertion and deletion is last-in, first-out.
// How would you implement a queue given a library implementing stacks?

export interface QueueAPI<T> {
  enqueue: (value: T) => void;
  dequeue: () => T | null;
}

export class Queue implements QueueAPI<string> {
  enqueue(value: string) {}
  dequeue(): string | null {
    return "";
  }
}
