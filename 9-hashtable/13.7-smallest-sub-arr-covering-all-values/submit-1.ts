// FIND THE SMALLEST SUBARRAY COVERING ALL VALUES

// When you type keywords in a search engine, the search engine will return results,
// and each result contains a digest of the web page,
// i.e., a highlighting within that page of the keywords that you searched for.
// For example, a search for the keywords "Union" and "save" on a page
// with the text of the Emancipation Proclamation should return the result shown in Figure 13.1.

// My paramount object in this struggle is to save the Union,
// and is not either to save or to destroy slavery.
// If I could save the Union without freeing any slave I would do it,
// and if I could save it by freeing all the slaves I would do it;
// and if I could save it by freeing some and leaving others alone I would also do that.

// Figure 13.1: Search result with digest in boldface and search keywords underlined.
// The digest for this page is the text in boldface,
// with the keywords underlined for emphasis.
// It is the shortest substring of the page which contains all the keywords in the search.
// The problem of computing the digest is abstracted as follows.

// Write a program which takes an array of strings and a set of strings,
// and return the indices of the starting and ending index
// of a shortest subarray of the given array that "covers" the set,
// i.e., contains all strings in the set.

// As a concrete example,
// consider the array
// (apple, banana, apple, apple, dog, cat, apple, dog, banana, apple, cat, dog)
// and the set {banana,cat}
// The shortest subarray covering the set is from 8 to 10

export function findSmallestSubarrayCoveringSet(
  paragraph: string[],
  keywords: Set<string>
) {
  //   0      1       2       3     4    5     6     7     8      9     10    11
  // (apple, banana, apple, apple, dog, cat, apple, dog, (banana, apple, cat), dog)
  // (apple, banana, apple, apple, dog, cat, apple, dog, banana, apple, cat, dog)
  //                                                             ^                $
  // { banana: 1, cat: 0 }
  // (0,5) => (1,5)
  // (2,8) => (3,8) => (4,8) => (5,8)
  // (6,10) => (7,10) => (8,10)
  const freqLeft: Record<string, number> = {};
  for (let word of [...keywords]) {
    freqLeft[word] = 1;
  }

  let sizeNeeded = Object.keys(freqLeft).length;
  let leftCount = sizeNeeded;

  let windowStart = 0;
  let minWindowSize = Infinity;
  let bestWindow = [-1, -1];
  for (let windowEnd = 0; windowEnd < paragraph.length; windowEnd++) {
    let curWord = paragraph[windowEnd];

    if (curWord in freqLeft) {
      freqLeft[curWord]--;

      if (freqLeft[curWord] === 0) leftCount--;
    }

    while (leftCount === 0 && windowEnd - windowStart + 1 >= sizeNeeded) {
      // valid window
      let curWindowSize = windowEnd - windowStart + 1;
      if (curWindowSize < minWindowSize) {
        minWindowSize = curWindowSize;
        bestWindow = [windowStart, windowEnd];
      }

      // shrink down to find better one
      const wordToRemove = paragraph[windowStart];
      if (wordToRemove in freqLeft) {
        if (freqLeft[wordToRemove] === 0) leftCount++;
        freqLeft[wordToRemove]++;
      }
      windowStart++;
    }
  }

  return bestWindow;
}
