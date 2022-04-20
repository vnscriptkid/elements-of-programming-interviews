// COMPUTE ENCLOSED REGIONS

// Let A be a 2D array whose entries are either x or _.
// Write a program that takes A, and replaces all x that cannot reach the boundary with a _.

// INPUT
// _ _ _
// _ x _
// x _ _
// OUTPUT
// _ _ _
// _ _ _
// o _ _

// INPUT
// _ _ _
// _ o _
// o o _
// OUTPUT
// _ _ _
// _ o _
// o o _

// INPUT
// _ _ _ _
// _ o _ _
// _ _ o _
// _ o o _
// OUTPUT
// _ _ _ _
// _ _ _ _
// _ _ o _
// _ o o _

export enum Character {
  o = "o",
  _ = "_",
}

export class Coordinate {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export function fillSurroundedRegions(board: Character[][]) {}
