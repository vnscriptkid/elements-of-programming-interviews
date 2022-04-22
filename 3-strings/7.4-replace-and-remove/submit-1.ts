// REPLACE AND REMOVE

// Consider the following two rules that are to be applied to an array of characters.
// • Replace each 'a' by two 'd's.
// • Delete each entry containing a 'b'.

// For example, applying these rules to the array (a,c,d,b,b,c,a) results in the array (d,d,c,d,c,d,d)

// Write a program which takes as input an array of characters,
// and removes each 'b' and replaces each 'a' by two 'd's.
// Specifically, along with the array, you are provided an

// integer-valued size. Size denotes the number of entries of the array that the operation is to be applied to.
// You do not have to worry preserving about subsequent entries.

// For example, if the array is {a,b,a,c,J) and the size is 4,
// then you can return (d,d,d,d,c). You can assume there is enough space in the array to hold the final result.

export function replaceAndRemove(size: number, s: string[]) {
  // 0  1  2  3  4  5  6  7  8  9  10 11
  // a, c, d, b, b, c, a, _, _, _, _, _
  // a, c, d, c, a, d, d, _, _, _, _, _
  //          ^
  //             $
  // 7
  let countA = 0;
  let writeIdx = 0;
  for (let i = 0; i < size; i++) {
    if (s[i] === "a") countA++;
    if (s[i] !== "b") {
      s[writeIdx++] = s[i];
    }
  }

  let cur = writeIdx - 1;
  writeIdx = cur + countA;

  const finalSize = writeIdx + 1;

  while (cur >= 0) {
    if (s[cur] === "a") {
      s[writeIdx--] = "d";
      s[writeIdx--] = "d";
    } else {
      s[writeIdx--] = s[cur];
    }

    cur--;
  }

  return finalSize;
}
