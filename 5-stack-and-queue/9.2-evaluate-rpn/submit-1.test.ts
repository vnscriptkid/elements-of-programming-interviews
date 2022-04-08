import { evalExp } from "./submit-1";

test("it works", () => {
  expect(evalExp("3,4,+,2,*,1,+")).toBe(15);
});
