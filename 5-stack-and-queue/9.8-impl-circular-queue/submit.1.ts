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
  dequeue: () => number | null;
}

function reverse(arr: number[], fromIdx: number, toIdx: number) {
  for (let left = fromIdx, right = toIdx; left < right; left++, right--) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
}

function leftRotate(arr: number[], steps: number) {
  // steps = 2
  // [1,2,3,4,5]

  // [5,4,3,2,1] reverse whole arr
  reverse(arr, 0, arr.length - 1);

  // steps = arr.length - steps; => steps = 3
  steps = arr.length - steps;

  // reverse first 3
  // [3,4,5,2,1]
  reverse(arr, 0, steps - 1);

  // reverse the rest
  reverse(arr, steps, arr.length - 1);
  // [3,4,5,1,2]

  // [3,4,5,1,2]
}

export class Queue implements QueueAPI {
  capacity: number;
  entries: number[];
  head: number;
  tail: number;
  numOfElements: number;
  static SCALE_FACTOR = 2;

  constructor(initialCapacity: number) {
    this.capacity = initialCapacity;
    this.entries = Array(this.capacity).fill(undefined);
    this.head = this.tail = 0;
    this.numOfElements = 0;
  }
  enqueue(value: number) {
    if (this.numOfElements === this.capacity) {
      // resize
      leftRotate(this.entries, this.head);
      this.entries = this.entries.concat(Array(this.capacity).fill(undefined));
      this.head = 0;
      this.tail = this.capacity;
      this.capacity *= Queue.SCALE_FACTOR;
    }

    this.numOfElements++;
    this.entries[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
  }

  dequeue(): number | null {
    if (this.numOfElements > 0) {
      this.numOfElements--;
      const retNum = this.entries[this.head];
      this.head = (this.head + 1) % this.capacity;
      return retNum;
    }

    return null;
  }
}
