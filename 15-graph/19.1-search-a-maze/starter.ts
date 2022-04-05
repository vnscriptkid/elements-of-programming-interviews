// SEARCH A MAZE

// Given a 2D array of black and white entries representing a maze with designated entrance and exit points,
// find a path from the entrance to the exit, if one exists.

export class Coordinate {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export enum Color {
  BLACK,
  WHITE,
}

export function searchMaze(
  maze: Color[][],
  start: Coordinate,
  end: Coordinate
): boolean {
  return true;
}
