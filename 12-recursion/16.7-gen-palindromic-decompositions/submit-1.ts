// GENERATE PALINDROMIC DECOMPOSITIONS

// A string is said to be palindromic if it reads the same backwards and forwards.
// A decomposition of a string is a set of strings whose concatenation is the string.
// For example, "611116" is palindromic, and "611", "11", "6" is one decomposition for it.

// Compute all palindromic decompositions of a given string.
// For example, if the string is "0204451881", then the decomposition "020", "44", "5", "1881" is palindromic,
// as is "020", "44", "5", "1", "88", "1".
// However, "02044, "5", "1881" is not a palindromic decomposition.

const isPalindromic = (str: string) => str.split("").reverse().join("") === str;

export function palindromePartitioning(input: string): string[][] {
  // 0 2 0 4 4 5 1 8 8 1
  const result: string[][] = [];
  recurse(input, 0, [], result);
  return result;
}

function recurse(
  input: string,
  offset: number,
  cur: string[],
  result: string[][]
) {
  if (offset === input.length) {
    result.push([...cur]);
    return;
  }

  for (let i = offset + 1; i <= input.length; ++i) {
    const curStr = input.substring(offset, i);
    if (isPalindromic(curStr)) {
      cur.push(curStr);
      recurse(input, i, cur, result);
      cur.pop();
    }
  }
}
