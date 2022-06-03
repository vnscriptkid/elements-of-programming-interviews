// IMPLEMENT A CIRCULAR QUEUE

// A queue can be implemented using an array and two additional fields,
// the beginning and the end indices. This structure is sometimes referred to as a circular queue.
// Both enqueue and dequeue have 0(1) time complexity.
// If the array is fixed, there is a maximum number of entries that can be stored.
// If the array is dynamically resized, the total time for m combined enqueue and dequeue operations is 0(m).

// Implement a queue API using an array for storing elements.
// Your API should include a constructor function, which takes as argument the initial capacity of the queue,
// enqueue and dequeue functions, and a function which returns the number of elements stored.
// Implement dynamic resizing to support storing an arbitrarily large number of elements.

interface QueueAPI {
  capacity: number;
  entries: number[];
  head: number;
  tail: number;
  numOfElements: number;
  enqueue: (value: number) => void;
  dequeue: () => number;
}

export class Queue implements QueueAPI {
  capacity: number;
  entries: number[];
  head: number;
  tail: number;
  numOfElements: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.entries = Array(this.capacity).fill(undefined);
    this.head = this.tail = 0;
    this.numOfElements = 0;
  }
  enqueue(value: number) {}
  dequeue(): number {
    return 0;
  }
}
