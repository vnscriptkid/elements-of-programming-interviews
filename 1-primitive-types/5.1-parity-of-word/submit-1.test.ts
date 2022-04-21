import { parity } from "./submit-1";

function findParity(num: number): 0 | 1 {
  return Number(num)
    .toString(2)
    .split("")
    .filter((x) => x === "1").length %
    2 ===
    1
    ? 1
    : 0;
}

test("works", () => {
  expect(parity(100)).toBe(findParity(100));
  expect(parity(99)).toBe(findParity(99));
  expect(parity(98)).toBe(findParity(98));
  expect(parity(97)).toBe(findParity(97));
});
