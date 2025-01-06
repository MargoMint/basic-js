const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const transformationResult = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    switch(item) {
      case '--discard-next':
        if (i + 1 < arr.length) {
          i += 1;
        }
        break;
      case '--discard-prev':
        if (transformationResult.length > 0 && arr[i - 2] !== '--discard-next') {
          transformationResult.pop();
        }
        break;

      case '--double-next':
        if (i + 1 < arr.length) {
          transformationResult.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (transformationResult.length > 0 && arr[i - 2] !== '--discard-next') {
          transformationResult.push(transformationResult[transformationResult.length - 1]);
        }
        break;

      default:
        transformationResult.push(item);
    }
  }
  return transformationResult;
}

module.exports = {
  transform
};
