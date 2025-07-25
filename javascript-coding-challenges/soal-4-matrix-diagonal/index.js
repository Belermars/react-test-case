function diagonalDifference(matrix) {
  let diag1 = 0;
  let diag2 = 0;
  const n = matrix.length;
  
  for (let i = 0; i < n; i++) {
    diag1 += matrix[i][i];
    diag2 += matrix[i][n - 1 - i];
  }
  
  return Math.abs(diag1 - diag2);
}

// Test case
const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
console.log(diagonalDifference(Matrix)); // Output: 3