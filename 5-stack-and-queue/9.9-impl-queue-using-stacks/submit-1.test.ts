import { Queue } from "./submit-1";

test("it works", () => {
  const queue = new Queue();
  queue.enqueue("a");
  queue.enqueue("b");
  queue.enqueue("c");
  //  <- [ a b c ] <-
  expect(queue.dequeue()).toEqual("a");
  //  <- [ b c ] <-
  queue.enqueue("d");
  queue.enqueue("e");
  //  <- [ b c d e ] <-
  expect(queue.dequeue()).toEqual("b");
  expect(queue.dequeue()).toEqual("c");
  expect(queue.dequeue()).toEqual("d");
  expect(queue.dequeue()).toEqual("e");
  expect(queue.dequeue()).toEqual(null);
});

// stackIn [   ]
// stackOut [ e d ]
