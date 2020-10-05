const CellState = require("./CellState");

test("CellState should have a DEAD state", () => {
  expect(CellState.DEAD).toBe(0);
});

test("CellState should have an ALIVE state", () => {
  expect(CellState.ALIVE).toBe(1);
});
