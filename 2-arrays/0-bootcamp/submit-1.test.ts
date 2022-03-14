import { oddEven } from "./submit-1";

test("oddEven", () => {
  const isOdd = (x: number) => x % 2 === 1;
  const result = oddEven([1, 6, 3, 5, 8, 9, 2]).map(isOdd);
  // 1,3,5,9|6,8,2
  expect(result).toEqual([true, true, true, true, false, false, false]);
});
