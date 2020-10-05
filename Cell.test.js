const Cell = require("./Cell");
const { DEAD, ALIVE } = require("./CellState");
const Game = require("./Game");

test("Cell should be initialized with a state", () => {
  const alive_cell = new Cell(ALIVE);
  expect(alive_cell.state).toBe(ALIVE);

  const dead_cell = new Cell(DEAD);
  expect(dead_cell.state).toBe(DEAD);
});

test("Any live cell with fewer than two live neighbours dies", () => {
  const cell_with_one_neighbor = new Cell(ALIVE);
  const next_state_one = cell_with_one_neighbor.nextState(1);
  expect(next_state_one).toBe(DEAD);

  const cell_with_zero_neighbors = new Cell(ALIVE);
  const next_state_zero = cell_with_zero_neighbors.nextState(0);
  expect(next_state_zero).toBe(DEAD);
});

test("Any live cell with two or three live neighbours lives on", () => {
  const cell_with_two_neighbors = new Cell(ALIVE);
  const next_state_two = cell_with_two_neighbors.nextState(2);
  expect(next_state_two).toBe(ALIVE);

  const cell_with_three_neighbors = new Cell(ALIVE);
  const next_state_three = cell_with_three_neighbors.nextState(3);
  expect(next_state_three).toBe(ALIVE);
});

test("Any live cell with more than three live neighbours dies", () => {
  const cell_with_four_neighbors = new Cell(ALIVE);
  const next_state_four = cell_with_four_neighbors.nextState(4);
  expect(next_state_four).toBe(DEAD);

  const cell_with_five_neighbors = new Cell(ALIVE);
  const next_state_five = cell_with_five_neighbors.nextState(5);
  expect(next_state_five).toBe(DEAD);
});

test("Any dead cell with exactly three live neighbours becomes a live cell", () => {
  const dead_cell = new Cell(DEAD);
  const next_state = dead_cell.nextState(3);
  expect(next_state).toBe(ALIVE);

  const dead_cell_with_two_neighbors = new Cell(DEAD);
  const next_state_two = dead_cell_with_two_neighbors.nextState(2);
  expect(next_state_two).toBe(DEAD);
});

test("Should get the correct number of ALIVE neighbors", () => {
  const game_state = [
    [new Cell(ALIVE), new Cell(DEAD), new Cell(DEAD)],
    [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
    [new Cell(ALIVE), new Cell(DEAD), new Cell(DEAD)],
  ];

  const game_state2 = [
    [new Cell(ALIVE), new Cell(DEAD), new Cell(ALIVE)],
    [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
    [new Cell(ALIVE), new Cell(DEAD), new Cell(ALIVE)],
  ];

  const game = new Game(game_state);
  const cell = game.getCell(1, 1);

  const game2 = new Game(game_state2);
  const cell2 = game2.getCell(1, 1);

  expect(cell.getAliveNeighbors(1, 1, game_state)).toBe(2);
  expect(cell2.getAliveNeighbors(1, 1, game_state2)).toBe(4);
});
