// COMPUTE THE SPREADSHEET COLUMN ENCODING

// Spreadsheets often use an alphabetical encoding of the successive columns. Specifically,
// columns are identified by "A", "B", "C", ..., "X", "Y", "Z", "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

// Implement a function that converts a spreadsheet column id to the corresponding integer,
// with "A" corresponding to 1.

// For example, you should return 4 for "D", 27 for "AA", 702 for "ZZ", etc. How would you test your code?

function toInt(char: string): number {
  return char.charCodeAt(0) - "A".charCodeAt(0) + 1;
}

export function ssDecodeColID(col: string): number {
  let n = col.length;

  let result = 0;

  for (let i = 0; i < n; i++) {
    let pow = n - 1 - i;
    result += toInt(col[i]) * Math.pow(26, pow);
  }

  return result;
}
