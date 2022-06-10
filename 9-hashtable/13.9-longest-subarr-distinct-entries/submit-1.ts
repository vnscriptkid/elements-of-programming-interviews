// 13.9 FIND THE LONGEST SUBARRAY WITH DISTINCT ENTRIES

// Write a program that takes an array and returns the length of a longest subarray
// with the property that all its elements are distinct.
// For example, if the array is (f,s,f,e,t,w,e,n,w,e) then a longest subarray all
// of whose elements are distinct is (s,f,e,t,w).

export function longestSubarrayWithDistinctEntries(list: string[]): number {
  // f, s, f, e, t, w, e, n, w, e
  //                      ^
  //                              $

  // { e: 1, w: 1, n: 1 }
  // longest: 5
  let longest = 0;

  let windowStart = 0;
  const freq: Record<string, number> = {};
  // sliding window
  for (let windowEnd = 0; windowEnd < list.length; windowEnd++) {
    // extend window if cur window is valid
    // assuming at the beginning of each loop, window is valid
    let newChar = list[windowEnd];
    if (!(newChar in freq)) freq[newChar] = 0;
    freq[newChar] += 1;

    // shrink down if invalid (when? list[windowEnd] === 2)
    while (freq[newChar] > 1) {
      let leftChar = list[windowStart];
      freq[leftChar]--;
      if (freq[leftChar] === 0) delete freq[leftChar];
      windowStart++;
    }
    // valid again? update curLength or not?
    longest = Math.max(longest, windowEnd - windowStart + 1);
  }

  return longest;
}
