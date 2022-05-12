// In the following program, we implement the basic queue API enqueue and dequeue as well as a max-method,
// which returns the maximum element stored in the queue.

// The basic idea is to use composition: add a private field that references a library queue object,
// and forward existing methods (enqueue and dequeue in this case) to that object.

interface Queue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
  max(): T | undefined;
}

export class QueueWithMax implements Queue<number> {
  private data: number[];
  private buffer: number[];

  constructor() {
    this.data = [];
    this.buffer = [];
  }
  max(): number | undefined {
    // <- 3 0 6 2 5 4 <-
    //                ^

    // buffer: 6 5 4
    return this.buffer[0];
  }

  enqueue(element: number): void {
    this.data.push(element);

    while (
      this.buffer.length &&
      element > this.buffer[this.buffer.length - 1]
    ) {
      this.buffer.pop();
    }

    this.buffer.push(element);
  }

  dequeue(): number | undefined {
    if (this.data.length && this.data[0] === this.buffer[0]) {
      this.buffer.shift();
    }

    return this.data.shift();
  }
}
