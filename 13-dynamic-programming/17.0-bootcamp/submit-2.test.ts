import {
  fibonacciGood,
  fibonacciBest,
  maxSubarraySum,
  maxSubarraySumGood,
  maxSubarraySumBest,
} from "./submit-2";

test("fibonacciGood", () => {
  expect(fibonacciGood(0)).toBe(0);
  expect(fibonacciGood(1)).toBe(1);
  expect(fibonacciGood(6)).toBe(8);
  expect(fibonacciGood(7)).toBe(13);
});

test("fibonacciBest", () => {
  expect(fibonacciBest(0)).toBe(0);
  expect(fibonacciBest(1)).toBe(1);
  expect(fibonacciBest(6)).toBe(8);
  expect(fibonacciBest(7)).toBe(13);
});

test("maxSubarraySum", () => {
  expect(maxSubarraySum([904, 40, 523, 12, -335, -385, -124, 481, -31])).toBe(
    1479
  );
});

test("maxSubarraySumGood", () => {
  expect(
    maxSubarraySumGood([904, 40, 523, 12, -335, -385, -124, 481, -31])
  ).toBe(1479);
});

test("maxSubarraySumBest", () => {
  expect(
    maxSubarraySumBest([904, 40, 523, 12, -335, -385, -124, 481, -31])
  ).toBe(1479);
});
