// REVERSE ALL THE WORDS IN A SENTENCE

// Given a string containing a set of words separated by whitespace,
// we would like to transform it to a string in which the words appear in the reverse order.
// For example, "Alice likes Bob" transforms to "Bob likes Alice".
// We do not need to keep the original string.
// Implement a function for reversing the words in a string s.

// Alice likes Bob
// b o B _ s e k i l _ e c i l A
//                     ^
//                             $

export function reverseWords(input: string[]) {
  reverse(input, 0, input.length - 1);

  let start = 0,
    end = 0;
  while (end < input.length) {
    end++;
    if (
      end === input.length - 1 /*last word*/ ||
      input[end + 1] === " " /*end a word*/
    ) {
      reverse(input, start, end);
      start = end + 2;
    }
  }

  return input;
}
function reverse(input: string[], start: number, end: number) {
  for (let left = start, right = end; left < right; left++, right--) {
    [input[left], input[right]] = [input[right], input[left]];
  }
}
