const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newNumber = Array.from(String(n));
  let maxNumber = 0;
  for (let i = 0; i < newNumber.length; i += 1) {
    const leftWithoutCurrent = [
      ...newNumber.slice(0, i),
      ...newNumber.slice(i + 1)
    ];
    const withoutOneDigit = +(leftWithoutCurrent.join(''));
    if (withoutOneDigit > maxNumber) {
      maxNumber = withoutOneDigit;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
