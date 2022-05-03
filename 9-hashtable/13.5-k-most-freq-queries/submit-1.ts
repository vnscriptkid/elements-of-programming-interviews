// COMPUTE THE k MOST FREQUENT QUERIES

// You are given a log file containing search queries.
// Each query is a string, and queries are separated by newlines.
// Diverse applications, such as autocompletion and trend analysis,
// require computing the most frequent queries.

// In the abstract, you are to solve the following problem.
// You are given an array of strings.
// Compute the k strings that appear most frequently in the array.
import { Heap } from "collections/heap";

export function kMostFrequentQueries(queries: string[], k: number) {
  const freq: Record<string, number> = {};

  for (let query of queries) {
    if (!(query in freq)) freq[query] = 0;
    freq[query]++;
  }

  const minHeap = new Heap([], null, (a: any, b: any) => b[1] - a[1]);

  for (let query in freq) {
    minHeap.add([query, freq[query]]);

    if (minHeap.length > k) minHeap.pop();
  }

  return minHeap.content
    .sort((a: any, b: any) => b[1] - a[1])
    .map((x: any) => x[0]);
}
