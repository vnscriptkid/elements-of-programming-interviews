import { isWellFormed } from "./submit-1";

test("it works", () => {
  expect(isWellFormed("([]){()}")).toEqual(true);
  expect(isWellFormed("[()[]{()()}]")).toEqual(true);
  expect(isWellFormed("[}")).toEqual(false);
  expect(isWellFormed("[()[]{()()")).toEqual(false);
  expect(isWellFormed("[()[]{()()]]")).toEqual(false);
});
