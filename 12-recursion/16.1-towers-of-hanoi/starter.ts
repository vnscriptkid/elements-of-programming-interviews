// THE TOWERS OF HANOI PROBLEM
// A peg contains rings in sorted order, with the largest ring being the lowest.
// You are to transfer these rings to another peg, which is initially empty.

// Write a program which prints a sequence of operations that transfers n rings from one peg to another.
// You have a third peg, which is initially empty.
// The only operation you can perform is taking a single ring from the top of one peg and placing it on the top of another peg.
// You must never place a larger ring above a smaller ring.

function computeTowerHanoi(numRings: number) {}

function computeTowerHanoiSteps(
  numRingsToMove: number,
  pegs: any[],
  fromPeg: number,
  toPeg: number,
  usePeg: number
) {}

// Move ring 1 from 0 to 1
// Move ring 2 from 0 to 2
// Move ring 1 from 1 to 2
// Move ring 3 from 0 to 1
// Move ring 1 from 2 to 0
// Move ring 2 from 2 to 1
// Move ring 1 from 0 to 1
