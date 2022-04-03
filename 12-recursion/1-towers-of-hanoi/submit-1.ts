const NUM_PEGS = 3;

export function computeTowerHanoi(numRings: number) {
  const pegs = [[] as any, [] as any, [] as any];

  for (let ringSize = numRings; ringSize >= 1; ringSize--) {
    pegs[0].push(ringSize);
  }

  computeTowerHanoiSteps(numRings, pegs, 0, 1, 2);
}

export function computeTowerHanoiSteps(
  numRingsToMove: number,
  pegs: any[],
  fromPeg: number,
  toPeg: number,
  usePeg: number
) {
  if (numRingsToMove <= 0) return;

  computeTowerHanoiSteps(numRingsToMove - 1, pegs, fromPeg, usePeg, toPeg);

  const lastRing = pegs[fromPeg].pop();
  pegs[toPeg].push(lastRing);
  console.log(`Move ring ${lastRing} from ${fromPeg} to ${toPeg}`);

  computeTowerHanoiSteps(numRingsToMove - 1, pegs, usePeg, toPeg, fromPeg);
}

computeTowerHanoi(3);
