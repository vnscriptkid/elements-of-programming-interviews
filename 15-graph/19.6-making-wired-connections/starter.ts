// MAKING WIRED CONNECTIONS

// Consider a collection of electrical pins on a printed circuit board (PCB).
// For each pair of pins, there may or may not be a wire joining them.
// This is shown in Figure 19.8, where vertices correspond to pins,
// and edges indicate the presence of a wire between pins.
// (The significance of the colors is explained later.)

// Design an algorithm that takes a set of pins and a set of wires connecting pairs of pins,
// and determines if it is possible to place some pins on the left half of a PCB,
// and the remainder on the right half, such that each wire is between left and right halves.
// Return such a division, if one exists.
// For example, the light vertices and dark vertices in Figure 19.8 are such division.

export class GraphVertex {
  d: number = -1;
  edges: number[] = [];
}

export function isAnyPlacementFeasible(edges: number[][]) {}
