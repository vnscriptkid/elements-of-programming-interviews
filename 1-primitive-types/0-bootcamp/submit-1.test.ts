import { countSetBits } from "./submit-1";

test("countSetBits", () => {
  const countNaive = (num: number) => num.toString(2).replace(/0/g, "").length;

  expect(countSetBits(20)).toEqual(countNaive(20));
  expect(countSetBits(32)).toEqual(countNaive(32));
  expect(countSetBits(33)).toEqual(countNaive(33));
  expect(countSetBits(52)).toEqual(countNaive(52));
  expect(countSetBits(77)).toEqual(countNaive(77));
});
