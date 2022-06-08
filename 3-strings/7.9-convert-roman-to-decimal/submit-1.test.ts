import { romanToInteger } from "./submit-1";

test("it works", () => {
  // ["I", 1],
  // ["V", 5],
  // ["X", 10],
  // ["L", 50],
  // ["C", 100],
  // ["D", 500],
  // ["M", 1000],
  expect(romanToInteger("XXXXXIIIIIIIII")).toEqual(59);
  expect(romanToInteger("LVIIII")).toEqual(59);
  expect(romanToInteger("LIX")).toEqual(59);
});
