import { QueueWithMax } from "./submit-1";

test("it works", () => {
  const queue = new QueueWithMax();

  queue.enqueue(1);
  queue.enqueue(6);
  queue.enqueue(2);

  // <- 1 6 2 <-

  expect(queue.max()).toBe(6);

  queue.enqueue(5);
  queue.enqueue(4);

  // <- 1 6 2 5 4 <-

  expect(queue.max()).toBe(6);

  queue.dequeue();
  queue.dequeue();

  // <- 2 5 4 <-

  expect(queue.max()).toBe(5);
});
