// COMPUTE THE k CLOSEST STARS
import { Heap } from "collections/heap";

// Consider a coordinate system for the Milky Way in which Earth is at (0,0,0).
// Model stars as points, and assume distances are in light years.
// The Milky Way consists of approximately 1012 stars, and their coordinates are stored in a file.

// How would you compute the k stars which are closest to Earth?

export class Star {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceToEarth() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

export function findClosestKStars(k: number, stars: Star[]): Star[] {
  const maxHeap = new Heap(
    [],
    null,
    (a: Star, b: Star) => a.distanceToEarth() - b.distanceToEarth()
  );

  for (let star of stars) {
    maxHeap.add(star);

    if (maxHeap.length > k) maxHeap.pop();
  }

  return maxHeap.content;
}
