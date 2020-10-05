const Cell = require("./Cell");
const { DEAD, ALIVE } = require("./CellState");

module.exports = class Game {
  constructor(state) {
    this.state = state;
  }

  getCell(row, col) {
    return this.state[row][col];
  }

  nextState() {
    let next_state = new Array(this.state.length);
    for (let i = 0; i < next_state.length; i++) {
      next_state[i] = new Array(this.state[0].length);
    }

    for (let i = 0; i < next_state.length; i++) {
      for (let j = 0; j < next_state[0].length; j++) {
        next_state[i][j] = new Cell(DEAD);
      }
    }

    this.state.forEach((row, i) => {
      row.forEach((col, j) => {
        const cell = this.getCell(i, j);
        const neighbors = cell.getAliveNeighbors(i, j, this.state);
        next_state[i][j] = new Cell(cell.nextState(neighbors));
      });
    });

    return next_state;
  }
};
