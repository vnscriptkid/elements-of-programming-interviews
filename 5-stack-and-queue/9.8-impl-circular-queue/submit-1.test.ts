import { Queue } from "./submit.1";

test("it works", () => {
  const queue = new Queue(4);

  // [ _, _, _, _ ]
  //   ^$

  queue.enqueue(2);
  // [ 2, _, _, _ ] numOfELements: 0
  //   ^  $
  queue.enqueue(4);
  // [ 2, 4, _, _ ]
  //   ^     $
  queue.enqueue(6);
  // [ 2, 4, 6, _ ]
  //   ^        $

  expect(queue.entries).toEqual([2, 4, 6, undefined]);
  expect(queue.head).toEqual(0);
  expect(queue.tail).toEqual(3);

  queue.enqueue(8);
  // [ 2, 4, 6, 8 ] numOfElements: 4
  //  ^$

  expect(queue.entries).toEqual([2, 4, 6, 8]);
  expect(queue.head).toEqual(0);
  expect(queue.tail).toEqual(0);

  expect(queue.dequeue()).toEqual(2);
  expect(queue.dequeue()).toEqual(4);

  // [ 2, 4, 6, 8 ]
  //   $     ^

  expect(queue.entries).toEqual([2, 4, 6, 8]);
  expect(queue.head).toEqual(2);
  expect(queue.tail).toEqual(0);

  queue.enqueue(10);
  queue.enqueue(12);

  // [ 10, 12, 6, 8 ]
  //           $^

  expect(queue.entries).toEqual([10, 12, 6, 8]);
  expect(queue.head).toEqual(2);
  expect(queue.tail).toEqual(2);

  queue.enqueue(14);
  // [ 6, 8, 10, 12 ] LEFT SHIFT BY 2
  //   $^

  // [ 6, 8, 10, 12, _, _, _, _ ] SCALE BY 2
  //   ^             $
  expect(queue.entries).toEqual([
    6,
    8,
    10,
    12,
    14,
    undefined,
    undefined,
    undefined,
  ]);
});
