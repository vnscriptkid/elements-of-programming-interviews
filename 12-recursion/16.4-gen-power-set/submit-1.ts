// GENERATE THE POWER SET

// Write a function that takes as input a set and returns its power set.

export function generatePowerSet(
  inputSet: number[],
  curIdx = 0,
  cur: any[] = [],
  result: any[] = []
) {
  if (curIdx === inputSet.length) {
    result.push([...cur]);
    return;
  }

  cur.push(inputSet[curIdx]);
  generatePowerSet(inputSet, curIdx + 1, cur, result);
  cur.pop();

  generatePowerSet(inputSet, curIdx + 1, cur, result);

  return result;
}
