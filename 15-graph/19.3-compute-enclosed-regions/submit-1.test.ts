import { Character, fillSurroundedRegions } from "./submit-1";

const { o, _ } = Character;

test("it works 1", () => {
  const board: Character[][] = [
    [_, _, _],
    [_, o, _],
    [o, _, _],
  ];

  expect(fillSurroundedRegions(board)).toEqual([
    [_, _, _],
    [_, _, _],
    [o, _, _],
  ]);
});

test("it works 2", () => {
  const board: Character[][] = [
    [_, _, _],
    [_, o, _],
    [o, o, _],
  ];

  expect(fillSurroundedRegions(board)).toEqual([
    [_, _, _],
    [_, o, _],
    [o, o, _],
  ]);
});

test("it works 3", () => {
  const board: Character[][] = [
    [_, _, _, _],
    [_, o, _, _],
    [_, _, o, _],
    [_, o, o, _],
  ];

  expect(fillSurroundedRegions(board)).toEqual([
    [_, _, _, _],
    [_, _, _, _],
    [_, _, o, _],
    [_, o, o, _],
  ]);
});
