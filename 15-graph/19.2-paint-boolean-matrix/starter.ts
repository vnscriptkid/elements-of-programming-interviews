// PAINT A BOOLEAN MATRIX

// mplement a routine that takes an n X m Boolean array A together with an entry (x, y) and
// flips the color of the region associated with (x, y). See Figure 19.6 for an example of flipping.

class Coordinate {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return String([this.x, this.y]);
  }
}

function flipColor(a: boolean[][], x: number, y: number) {}
