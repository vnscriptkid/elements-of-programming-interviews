import { gcd } from "./submit-2";

test("gcd", () => {
  expect(gcd(12, 24)).toBe(12);
  expect(gcd(156, 36)).toBe(12);
});
