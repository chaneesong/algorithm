/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = gas.reduce((a, b) => a + b, 0);
  let totalCost = cost.reduce((a, b) => a + b, 0);
  if (totalGas < totalCost) return -1;

  let start = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      start = i + 1;
    }
  }

  return start;
};
