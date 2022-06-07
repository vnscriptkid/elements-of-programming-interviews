// 18.8 COMPUTE THE LARGEST RECTANGLE UNDER THE SKYLINE

// You are given a sequence of adjacent buildings.
// Each has unit width and an integer height.
// These buildings form the skyline of a city.
// An architect wants to know the area of a largest rectangle contained in this skyline.
// See Figure 18.5 for an example.

// Figure 18.5: A collection of unit-width buildings, and the largest contained rectangle.
// The text label identifying the building is just below and to the right
// of its upper left-hand corner. The shaded area is the largest rectangle under the skyline.
// Its area is 2 x (11 - 1).
// Note that the tallest rectangle is from 7 to 9, and the widest rectangle is from 0 to 1,
// but neither of these are the largest rectangle under the skyline.

// Let A be an array representing the heights of adjacent buildings of unit width.
// Design an algorithm to compute the area of the largest rectangle contained in this skyline.

class Stack extends Array {
  peek() {
    return this.length > 0 ? this[this.length - 1] : null;
  }

  empty() {
    return this.length === 0;
  }
}

export function calculateLargestRectangle(heights: number[]): number {
  //            A  B  C  D  E  F  G  H  I  J  K  L  M
  //            0  1  2  3  4  5  6  7  8  9  10 11 12
  // heights: [ 1  4  2  5  6  3  2  6  6  5  2  1  3 ]
  //                  ^
  const indiciesStack = new Stack();

  let maxArea = 0;

  let i: number;

  for (i = 0; i < heights.length; i++) {
    while (
      !indiciesStack.empty() &&
      heights[i] <= heights[indiciesStack.peek()]
    ) {
      const stackOut = indiciesStack.pop();

      const height = heights[stackOut];
      const width = indiciesStack.empty() ? i : i - indiciesStack.peek() - 1;

      maxArea = Math.max(maxArea, height * width);
    }

    indiciesStack.push(i);
  }

  while (!indiciesStack.empty()) {
    const stackOut = indiciesStack.pop();

    const height = heights[stackOut];
    const width = indiciesStack.empty() ? i : i - indiciesStack.peek() - 1;

    maxArea = Math.max(maxArea, height * width);
  }

  return maxArea;
}
