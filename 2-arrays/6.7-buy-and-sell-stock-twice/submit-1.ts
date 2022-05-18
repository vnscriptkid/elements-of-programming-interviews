// BUY AND SELL A STOCK TWICE

// The max difference problem, introduced on Page 1, formalizes the maximum profit
// that can be made by buying and then selling a single share over a given day range.

// Write a program that computes the maximum profit that can be made by buying
// and selling a share at most twice. The second buy must be made on another date after the first sale.

// 12, 11, 13, 9, 12, 8, 14, 13, 15
// 0   0   2   0   3  0  6   6   7
//    s1   [                     ]
//         0   0   3  0  6   5  (7)

export function buyAndSellStockTwice(prices: number[]) {
  // first round: find the max profit if I sell at every price
  const maxProfitIfSellHere: number[] = [0];
  let minBeforeThis = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minBeforeThis = Math.min(prices[i - 1], minBeforeThis);

    const diff = Math.max(0, prices[i] - minBeforeThis);

    maxProfitIfSellHere[i] = Math.max(diff, maxProfitIfSellHere[i - 1]);
  }
  // second round: fix first sale, find the max profit for second sale
  let maxTotalProfit = 0;

  for (let i = 1; i < maxProfitIfSellHere.length; i++) {
    const firstSaleProfit = maxProfitIfSellHere[i];
    let minPriceBeforeThis = prices[i + 1];
    let secondSaleProfit = 0;
    for (let j = i + 2; j <= prices.length - 1; j++) {
      minPriceBeforeThis = Math.min(prices[j - 1], minPriceBeforeThis);

      const diff = Math.max(0, prices[j] - minPriceBeforeThis);

      secondSaleProfit = Math.max(secondSaleProfit, diff);
    }

    maxTotalProfit = Math.max(
      maxTotalProfit,
      firstSaleProfit + secondSaleProfit
    );
  }

  return maxTotalProfit;
}

buyAndSellStockTwice([12, 11, 13, 9, 12, 8, 14, 13, 15]);
