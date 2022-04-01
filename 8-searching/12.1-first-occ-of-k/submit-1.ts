// Binary search commonly asks for the index of any element of a sorted array that is
// equal to a specified element. The following problem has a slight twist on this.

// [ -14, -10, 2, 108, 108, 243, 285, 285, 285, 401 ]

// Write a method that takes a sorted array and a key and returns the index of the first occurrence of that key in the array.
// For example, when applied to the array in Figure 12.1
// your algorithm should return 3 if the given key is 108; if it is 285, your algorithm should return 6.

export function searchFirstK(arr: number[], k: number): number {
  let left = 0,
    right = arr.length - 1;
  let foundIdx = -1;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);

    if (k === arr[middle]) {
      foundIdx = middle;
      right = middle - 1;
    } else if (k < arr[middle]) {
      right = middle - 1;
    } else {
      // k > arr[middle]
      left = middle + 1;
    }
  }

  return foundIdx;
}
