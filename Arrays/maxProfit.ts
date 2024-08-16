function maxProfit(prices: number[]): number {
    if (prices.length === 0) {
        return 0;
    }

    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        console.log(profit);
    
       if (prices[i] < prices[i + 1]) {
        console.log(prices[i], prices[i + 1]);
        profit += prices[i + 1] - prices[i];
       }
    }


    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));