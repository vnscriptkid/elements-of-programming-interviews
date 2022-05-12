// In the following program, we implement the basic queue API enqueue and dequeue as well as a max-method,
// which returns the maximum element stored in the queue.

// The basic idea is to use composition: add a private field that references a library queue object,
// and forward existing methods (enqueue and dequeue in this case) to that object.

interface Queue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
}

export class QueueWithMax implements Queue<number> {
  private data: number[];

  constructor() {
    this.data = [];
  }

  enqueue(element: number): void {
    this.data.push(element);
  }
  dequeue(): number | undefined {
    return this.data.shift();
  }
}
