import { flipColor } from "./submit-1";

test("it works", () => {
  const V = {
    1: true,
    0: false,
  };

  const matrix = [
    [V[1], false, false, V[1]],
    [false, false, false, false],
    [false, V[1], V[1], false],
    [V[1], false, V[1], V[1]],
  ];
  const result = flipColor(matrix, 2, 1);

  expect(result).toEqual([
    [V[1], false, false, V[1]],
    [false, false, false, false],
    [false, false, false, false],
    [V[1], false, false, false],
  ]);
});
