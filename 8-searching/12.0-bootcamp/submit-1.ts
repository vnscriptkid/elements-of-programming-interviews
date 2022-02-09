function bsearch(arr: number[], key: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);

    if (arr[middle] === key) return middle;

    if (key > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}

export { bsearch };
