const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = names;

  let filesNames = {};
  let result = [];

  for (let i = 0; i < newNames.length; i += 1) {
    let name = newNames[i];

    if (filesNames[name] !== undefined) {
      let k = filesNames[name];
      let resultName = `${name}(${k})`;

      while (filesNames[resultName] !== undefined) {
        k += 1;
        resultName = `${name}(${k})`;
      }

      result.push(resultName);
      filesNames[name] += 1;
      filesNames[resultName] = 1;
    } else {
      result.push(name);
      filesNames[name] = 1;
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
