// THE MOST VISITED PAGES PROBLEM

// You are given a server log file containing billions of lines.
// Each line contains a number of fields.
// For this problem, the relevant field is an id denoting the page that was accessed.

// Write a function to read the next line from a log file, and a function to find the k most visited pages,
// where k is an input to the function.
// Optimize performance for the situation where calls to the two functions are interleaved.
// You can assume the set of distinct pages is small enough to fit in RAM.

// As a concrete example, suppose the log file ids appear in the following order: g,a,t,t,a,a,a,g,t,c,t,a,t,
// i.e. there are four pages with ids a,c,g,t.
// After the first 10 lines have been read,
// the most common page is a with a count of 4, and the next most common page is t with a count of 3.

// 1. g, (g:1)x
// 2. a, (a:1)x
// 3. t, (t:1)x
// 4. t, (t:2)x
// 5. a, (a:2)x
// 6. a, (a:3)x
// 7. a, (a:4)
// 8. g, (g:2)
// 9. t, (t:3)
// 10. c, (c:1)
// 11. t,
// 12. a,
// 13. t,

export class MostVisitedCalculatorNaive {
  readNextLine() {}
  findMostVisited(k: number) {}
}
