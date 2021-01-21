/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let map = {};
  // store the rows of original matrix
  for (let i = 0; i < matrix.length; i++) {
    map[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      map[i].push(matrix[i][j]);
    }
  }
  // reconstruct the matrix using stored rows
  for (let entry of Object.entries(map)) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][matrix.length - entry[0] - 1] = entry[1][i];
      console.log(entry[1][i]);
    }
  }
};
