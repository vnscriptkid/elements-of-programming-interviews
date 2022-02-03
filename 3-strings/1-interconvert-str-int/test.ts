import { intToStr, strToInt } from "./submit-1";

test("strToInt", () => {
  expect(strToInt("123")).toEqual(123);
  expect(strToInt("-100")).toEqual(-100);
});

test("intToStr", () => {
  expect(intToStr(123)).toEqual("123");
  expect(intToStr(-100)).toEqual("-100");
});
