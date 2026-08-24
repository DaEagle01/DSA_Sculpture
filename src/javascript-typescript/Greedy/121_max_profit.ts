/* 
    121. Best Time to Buy and Sell Stock
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/

const maxProfit = (prices: number[]): number => {
    let min = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        const element = prices[i];

        if (element < min) {
            min = element;
        } else {
            let gap = element - min;
            if (gap > profit) {
                profit = gap;
            }
        }
    }

    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([10, 1, 5, 6, 7, 1])); // 6