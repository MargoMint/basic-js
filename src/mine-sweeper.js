const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultMatrix = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === true) {
        for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
          for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
            if (offsetX === 0 && offsetY === 0) continue;
            
            const neighborCellX = i + offsetX;
            const neighborCellY = j + offsetY;

            if (neighborCellX >= 0 && neighborCellY >= 0 && neighborCellX < matrix.length && neighborCellY < matrix[i].length) {
              resultMatrix[neighborCellX][neighborCellY] += 1;
            }
          }
        }
      }
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
