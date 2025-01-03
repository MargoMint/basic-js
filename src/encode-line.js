const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newStr = str;
  if (newStr === '' || typeof(newStr) !== 'string') {
    return '';
  }
  let count = 1;
  let result = '';
  for (let i = 0; i < newStr.length; i += 1) {
    if (newStr[i] === newStr[i + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        result += count + str[i];
      } else {
        result += str[i];
      }
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
