import { computeMaxProfit } from "./submit-1";

test("it works", () => {
  const prices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];

  expect(computeMaxProfit(prices)).toEqual(30);
});
