export function sudoku2(grid: string[][]): boolean {
  let rowMap: { [key: string]: boolean } = {};
  let colMap: { [key: string]: boolean } = {};
  /**
   * We have 9 sub-grid, use i / 3, and j / 3 to indexing theme
   * 0(0|0) 1(0|1) 2(0|2)
   * 3(1|0) 4(1|1) 5(1|2)
   * 6(2|0) 7(2|1) 8(2|2)
   */
  const gridMap: { [outerKey: string]: { [innerKey: string]: boolean } } = {};
  for (let row = 0; row < grid.length; row += 1) {
    for (let column = 0; column < grid.length; column += 1) {
      const gridKey = `${Math.floor(row / 3)},${Math.floor(column / 3)}`;
      if (
        // Row not unique
        rowMap[grid[row][column]] ||
        // Column not unique
        colMap[grid[column][row]] ||
        // Sub grid not unique
        (gridMap[gridKey] && gridMap[gridKey][grid[row][column]])
      ) {
        return false;
      }

      if (grid[row][column] !== '.') {
        rowMap[grid[row][column]] = true;
        // Add to sub-grid map
        if (!gridMap[gridKey]) {
          gridMap[gridKey] = {};
        }
        gridMap[gridKey][grid[row][column]] = true;
      }

      if (grid[column][row] !== '.') {
        colMap[grid[column][row]] = true;
      }
    }
    rowMap = {};
    colMap = {};
  }
  return true;
}
