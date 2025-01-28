function getTopClientsSalesSum(sales) {
  let salesSum = 0;

  sales.forEach((sale) => {
    salesSum += sale;
  });
  return salesSum;
}

let topClientsSales = [10000, 20000, 30000];
console.log(getTopClientsSalesSum(topClientsSales));
