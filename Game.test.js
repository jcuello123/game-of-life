const { DEAD, ALIVE } = require("./CellState");
const Game = require("./Game");
const Cell = require("./Cell");

test("Game should have initiliazed state of cells", () => {
  const game_state = [
    [new Cell(ALIVE), new Cell(DEAD), new Cell(DEAD)],
    [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
    [new Cell(ALIVE), new Cell(DEAD), new Cell(DEAD)],
  ];

  const game = new Game(game_state);

  expect(game.state).toEqual(game_state);
});

test("Game should access any specific cell", () => {
  const game_state = [
    [new Cell(ALIVE), new Cell(DEAD), new Cell(DEAD)],
    [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
    [new Cell(ALIVE), new Cell(DEAD), new Cell(DEAD)],
  ];

  const game = new Game(game_state);

  expect(game.getCell(1, 1).state).toBe(ALIVE);
  expect(game.getCell(2, 2).state).toBe(DEAD);
});

test("Game's next state should change to the correct state ", () => {
  const game_state = [
    [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
    [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
    [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
  ];

  const next_state = [
    [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
    [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)],
    [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
  ];

  const game = new Game(game_state);
  const game2 = new Game(next_state);

  game.state = game.nextState();
  game2.state = game2.nextState();

  expect(game.state).toEqual(next_state);
  expect(game2.state).toEqual(game_state);
});
