import { generatePrimes } from "./submit-1";

test("it works", () => {
  expect(generatePrimes(18)).toEqual([2, 3, 5, 7, 11, 13, 17]);
});
