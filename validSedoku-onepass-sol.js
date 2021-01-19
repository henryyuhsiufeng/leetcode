var isValidSudoku = function (board) {
  const map = {}; // Map for storing our key-strings.

  for (let i = 0; i < 9; i++) {
    // Outer-loop for rows.
    for (let j = 0; j < 9; j++) {
      // Inner-loop for cols.

      if (board[i][j] === ".") continue; // Skip checking empty spaces.

      let num = board[i][j],
        x = Math.floor(i / 3), // We can iterate through each box
        y = Math.floor(j / 3); // using indices (i, j) divided by 3.

      let err =
        map["r" + i + num] || // Check if any of the computed
        map["c" + j + num] || // key-strings already exist in
        map["b" + x + y + num]; // our map object.

      if (err) return false; // If 'err' is true, board is invalid.

      map["r" + i + num] = 1; // Add 'row' key-string to map.
      map["c" + j + num] = 1; // Add 'col' key-string to map.
      map["b" + x + y + num] = 1;
      // console.log(map)// Add 'box' key-string to map.
    }
  }

  return true; // If no error, board is valid.
};
