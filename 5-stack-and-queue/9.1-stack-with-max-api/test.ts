import { Stack } from "./submit-1";

test("1 + 1", () => {
  const stack = new Stack();

  stack.push(5);
  stack.push(7);
  stack.push(2);
  stack.push(9);
  stack.push(3);

  // max:5 7
  // [ 5 7 2

  expect(stack.max).toEqual(9);

  stack.pop();
  stack.pop();

  expect(stack.max).toEqual(7);
});
