import { buyAndSellStockTwice } from "./submit-1";

test("it works", () => {
  expect(buyAndSellStockTwice([12, 11, 13, 9, 12, 8, 14, 13, 15])).toEqual(10);
});
