// BUY AND SELL A STOCK ONCE

// This problem is concerned with the problem of optimally buying and selling a stock once,
// as described on Page 2. As an example, consider the following sequence of stock prices:
// (310,315,275,295,260,270,290,230,255,250).
// The maximum profit that can be made with one buy and one sell is 30—buy at 260 and sell at 290.
// Note that 260 is not the lowest price, nor 290 the highest price.

// Write a program that takes an array denoting the daily stock price,
// and returns the maximum profit that could be made by buying and then selling one share of that stock.

export function computeMaxProfit(prices: number[]) {
  // 310, 315, 275, 295, 260, 270, 290, 230, 255, 250
  //                                ^

  // min: 310
  // diff: 30
  // maxProfitNow: 30

  let min = Infinity;
  let maxProfit = -Infinity;

  for (let curIdx = 1; curIdx < prices.length; curIdx++) {
    let prevPrice = prices[curIdx - 1];
    let curPrice = prices[curIdx];

    min = Math.min(prevPrice, min);
    const diff = curPrice - min;
    maxProfit = Math.max(diff, maxProfit);
  }

  return maxProfit;
}

const prices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];

computeMaxProfit(prices);
