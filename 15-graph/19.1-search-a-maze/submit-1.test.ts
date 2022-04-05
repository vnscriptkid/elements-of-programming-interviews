import { Color, Coordinate, searchMaze } from "./submit-1";

test("it works", () => {
  const { BLACK: x, WHITE: o } = Color;

  const maze = [
    [o, x, o],
    [o, x, x],
    [o, o, o],
  ];

  expect(searchMaze(maze, new Coordinate(0, 0), new Coordinate(2, 2))).toBe(
    true
  );

  expect(searchMaze(maze, new Coordinate(0, 0), new Coordinate(0, 2))).toBe(
    false
  );
});
