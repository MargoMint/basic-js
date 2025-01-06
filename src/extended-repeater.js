const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let addition = '';
  if (options.addition !== undefined) {
    addition = String(options.addition);
  }
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  if (addition) {
    addition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  }

  let resultStr = Array(repeatTimes).fill(str);
  if (addition) {
    resultStr = resultStr.map((i) => i + addition);
  }
  let result = resultStr.join(separator);
  return result;
}

module.exports = {
  repeater
};
