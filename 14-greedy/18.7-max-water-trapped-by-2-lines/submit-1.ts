// COMPUTE THE MAXIMUM WATER TRAPPED BY A PAIR OF VERTICAL LINES

// An array of integers naturally defines a set of lines parallel to the Y-axis,
// starting from x = 0 as illustrated in Figure 18.4(a).
// The goal of this problem is to find the pair of lines that together with the X-axis "trap" the most water.
// See Figure 18.4(b) for an example.

export function getMaxTrappedWater(heights: number[]): number {
  let curMax = -1;

  let left = 0,
    right = heights.length - 1;

  while (left < right) {
    let leftHeight = heights[left];
    let rightHeight = heights[right];
    const water = (right - left) * Math.min(leftHeight, rightHeight);

    curMax = Math.max(curMax, water);

    if (leftHeight === rightHeight) {
      left++;
      right--;
    } else if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return curMax;
}
