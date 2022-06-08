// 7.9 CONVERT FROM ROMAN TO DECIMAL

// The Roman numeral representation of positive integers uses the symbols I,V,X,L,C,D,M.
// Each symbol represents a value, with
// I being 1,
// V being 5,
// X being 10,
// L being 50,
// C being 100,
// D being 500,
// and M being 1000.
// In this problem we give simplified rules for representing numbers in this system.

// Specifically, define a string over the Roman number symbols to be a valid Roman
// number string if symbols appear in non increasing order, with the following exceptions allowed:
// • I can immediately precede V and X.
// • X can immediately precede L and C.
// • C can immediately precede D and M.

// Back-to-back exceptions are not allowed, e.g., IXC is invalid, as is CDM.
// A valid complex Roman number string represents the integer
// which is the sum of the symbols that do not correspond to exceptions;
// for the exceptions, add the difference of the larger symbol and the smaller symbol.
// For example, the strings "XXXXXfflllllH", "LVIIII" and "LIX" are valid Roman
// number strings representing 59.
// The shortest valid complex Roman number string corresponding to the integer 59 is "LIX".
// Write a program which takes as input a valid Roman number string s
// and returns the integer it corresponds to.

export function romanToInteger(s: string): number {
  const valueOf = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  const lastChar = s.charAt(s.length - 1);
  let sum: number = valueOf.get(lastChar)!;

  for (let i = s.length - 2; i >= 0; i--) {
    let curChar = s[i];
    let rightChar = s[i + 1];

    if (valueOf.get(curChar)! < valueOf.get(rightChar)!) {
      sum -= valueOf.get(curChar)!;
    } else {
      sum += valueOf.get(curChar)!;
    }
  }

  return sum;
}
