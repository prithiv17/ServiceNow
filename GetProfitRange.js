function getProfitRange(priceRange) {
  var profit = 0;
  var minVal;
  var profitRange = "";
  for (let index = 0; index < priceRange.length; index++) {
    minVal = minVal
      ? priceRange[index] < minVal
        ? priceRange[index]
        : minVal
      : priceRange[index];
    if (priceRange[index] - minVal > profit) {
      profit = priceRange[index] - minVal;
      profitRange = "Buy at " + minVal + " Sell at " + priceRange[index];
    }
  }
  return [profit, profitRange];
}

console.log(getProfitRange([7, 1, 5, 3, 6, 4]));

// Output : [ 5, 'Buy at 1 Sell at 6' ]
