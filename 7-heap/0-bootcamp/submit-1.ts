import Heap from "collections/heap";

function findTopK(k: number, iter: Iterable<string>) {
  const minHeap = new Heap(
    [],
    null,
    (a: string, b: string) => b.length - a.length
  );

  for (const str of iter) {
    minHeap.add(str);

    if (minHeap.length === k + 1) minHeap.pop();
  }

  return Array.from(minHeap);
}

function findTopKBetter(k: number, iter: Iterable<string>) {
  const minHeap = new Heap(
    [],
    null,
    (a: string, b: string) => b.length - a.length
  );

  for (const str of iter) {
    if (minHeap.length < k) {
      minHeap.add(str);
      continue;
    }

    // minHeap.length === k
    if (str.length > minHeap.peek().length) {
      minHeap.pop();
      minHeap.add(str);
    }
  }

  return Array.from(minHeap);
}

export { findTopK, findTopKBetter };
