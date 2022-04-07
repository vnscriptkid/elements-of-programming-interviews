import { convertBase } from "./submit-1";

test("it works", () => {
  expect(convertBase("615", 7, 13)).toBe("1A7");
  // 6 x 7^2 + 1 x 7 + 5 = 1 x 13^2 + 10 x 13 + 7
  expect(convertBase("-615", 7, 13)).toBe("-1A7");
});
