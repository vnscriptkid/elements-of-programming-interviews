export function bsearch(arr: number[], key: number) {
  for (let left = 0, right = arr.length - 1; left <= right; ) {
    let middle = ~~(left + (right - left) / 2);

    if (arr[middle] === key) return middle;

    if (key > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}
