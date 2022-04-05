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

  equals(other: Coordinate) {
    return this.x === other.x && this.y === other.y;
  }

  toString() {
    return [this.x, this.y].toString();
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
  const n = maze.length;

  function isValidPoint({ x, y }: Coordinate) {
    return x >= 0 && y >= 0 && x < n && y < n;
  }

  function validNeighbors(coord: Coordinate) {
    const { x, y } = coord;

    return [
      new Coordinate(x, y - 1),
      new Coordinate(x, y + 1),
      new Coordinate(x - 1, y),
      new Coordinate(x + 1, y),
    ].filter(isValidPoint);
  }

  function dfs(cur: Coordinate, visited = new Set()) {
    visited.add(cur.toString());

    if (cur.equals(end)) return true;

    for (let next of validNeighbors(cur)) {
      if (maze[next.x][next.y] === Color.BLACK) continue;

      if (visited.has(next.toString())) continue;

      if (dfs(next, visited)) return true;
    }

    return false;
  }

  return dfs(start);
}
