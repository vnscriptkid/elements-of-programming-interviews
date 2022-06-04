// FIND SMALLEST SUBARRAY SEQUENTIALLY COVERING ALL VALUES

// In Problem 13.7 on Page 218 we did not differentiate between the order in which keywords appeared.
// If the digest has to include the keywords in the order in which they appear in the search textbox,
// we may get a different digest.
// For example, for the search keywords "Union" and "save", in that order,
// the digest would be "Union, and is not either to save".

// Write a program that takes two arrays of strings, and return the indices of the starting and ending index
// of a shortest subarray of the first array (the "paragraph" array) that "sequentially covers",
// i.e., contains all the strings in the second array (the "keywords" array),
// in the order in which they appear in the keywords array.
// You can assume all keywords are distinct.

// For example, let the paragraph array be (apple,banana,cat,apple), and the keywords array be (banana,apple).
// The paragraph subarray starting at index 0 and ending at index 1 does not fulfill the specification,
// even though it contains all the keywords, since they do not appear in the specified order.
// On the other hand, the subarray starting at index 1 and ending at index 3 does fulfill the specification.

export class Subarray {
  // Represent subarray by starting and ending indices, inclusive.
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export function findSmallestSequentiallyCoveringSubset(
  paragraph: string[],
  keywords: string[]
): Subarray {
  //     0         1       2       3
  // ["apple", "banana", "cat", "apple"],
  //                               ^

  //     0         1
  // ["banana", "apple"]

  // keywordToIdx: { banana: 0, apple: 1 }
  // latestOccurrence [ -1, 0 ]
  // shortestSubarrayLength: [ 1, 3 ]
  // shortestDistance: Infinity

  const keywordToIdx: Record<string, number> = {};

  const latestOcc: number[] = [];
  const shortestSubarrayLength: number[] = [];

  // init
  for (let [idx, keyword] of keywords.entries()) {
    keywordToIdx[keyword] = idx;
    latestOcc[idx] = Infinity;
    shortestSubarrayLength[idx] = Infinity;
  }
  // loop through paragraph
  for (let [i, word] of paragraph.entries()) {
    // process if it's in the keywords list
    if (word in keywordToIdx) {
      const idxOfKeyword = keywordToIdx[word];
      // update latestOccurrence
      latestOcc[idxOfKeyword] = i;

      // if first keyword, update shortestSubarrayLength[0] = 1
      if (idxOfKeyword === 0) {
        shortestSubarrayLength[0] = 1;
      } else if (shortestSubarrayLength[idxOfKeyword - 1] !== Infinity) {
        // if not first keyword, look at prev keyword
        const shortestLengthToPrev = shortestSubarrayLength[idxOfKeyword - 1];

        shortestSubarrayLength[idxOfKeyword] = Math.min(
          shortestSubarrayLength[idxOfKeyword],
          shortestLengthToPrev + (i - latestOcc[idxOfKeyword - 1])
        );
      }
    }
  }

  if (shortestSubarrayLength[keywords.length - 1] !== Infinity) {
    return new Subarray(latestOcc[0], latestOcc[keywords.length - 1]);
  }

  return new Subarray(-1, -1);
}
