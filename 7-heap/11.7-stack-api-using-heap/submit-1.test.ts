import { StackUsingHeap } from "./submit-1";

test("it works", () => {
  const stack = new StackUsingHeap();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.pop()).toEqual(3);
  expect(stack.pop()).toEqual(2);

  stack.push(4);
  stack.push(5);

  expect(stack.pop()).toEqual(5);
  expect(stack.pop()).toEqual(4);
  expect(stack.pop()).toEqual(1);
  expect(stack.pop()).toEqual(undefined);
});
