import { QueueWithMax } from "./submit-1";

test("it works", () => {
  const queue = new QueueWithMax();

  queue.enqueue(1);
  queue.enqueue(5);
  queue.enqueue(2);

  // <- [1 5 2] <-

  expect(queue.max()).toEqual(5);

  queue.enqueue(3);
  queue.enqueue(4);

  // <- [1 5 2 3 4] <-

  expect(queue.max()).toEqual(5);

  expect(queue.dequeue()).toEqual(1);
  expect(queue.dequeue()).toEqual(5);
  // <- [2 3 4] <-

  expect(queue.max()).toEqual(4);
});
