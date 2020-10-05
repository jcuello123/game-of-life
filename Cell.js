const { DEAD, ALIVE } = require("./CellState");

module.exports = class Cell {
  constructor(state) {
    this.state = state;
  }

  nextState(alive_neighbors) {
    if (
      alive_neighbors < 2 ||
      alive_neighbors > 3 ||
      (alive_neighbors === 2 && this.state == DEAD)
    ) {
      return DEAD;
    } else {
      return ALIVE;
    }
  }

  getAliveNeighbors(row, col, cell_grid) {
    let alive_neighbors = 0;

    //row above
    if (row - 1 >= 0 && col - 1 >= 0) {
      alive_neighbors += cell_grid[row - 1][col - 1].state;
    }
    if (row - 1 >= 0) {
      alive_neighbors += cell_grid[row - 1][col].state;
    }
    if (row - 1 >= 0 && col + 1 < cell_grid[0].length) {
      alive_neighbors += cell_grid[row - 1][col + 1].state;
    }

    //same row
    if (col - 1 >= 0) {
      alive_neighbors += cell_grid[row][col - 1].state;
    }
    if (col + 1 < cell_grid[0].length) {
      alive_neighbors += cell_grid[row][col + 1].state;
    }

    //row below
    if (row + 1 < cell_grid[row].length && col - 1 >= 0) {
      alive_neighbors += cell_grid[row + 1][col - 1].state;
    }
    if (row + 1 < cell_grid[row].length) {
      alive_neighbors += cell_grid[row + 1][col].state;
    }
    if (row + 1 < cell_grid[row].length && col + 1 < cell_grid[0].length) {
      alive_neighbors += cell_grid[row + 1][col + 1].state;
    }

    return alive_neighbors;
  }
};
