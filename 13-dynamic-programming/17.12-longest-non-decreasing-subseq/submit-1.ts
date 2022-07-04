// 17.12 FIND THE LONGEST NONDECREASING SUBSEQUENCE

// The problem of finding the longest nondecreasing subsequence in a sequence of inte¬
// gers has implications to many disciplines, including string matching and analyzing
// card games.

// As a concrete instance, the length of a longest nondecreasing
// subsequence for the array in Figure 17.15 is 4. There are multiple longest nondecreasing
// subsequences,

// [ 0, 8, 4, 12, 2, 10, 6, 14, 1, 9 ]

// e.g., (0,4,10,14} and (0,2,6,9). Note that elements of non-decreasing
// subsequence are not required to immediately follow each other in the original sequence

// Write a program that takes asinput an array of numbers and returns the length of a
// longest nondecreasing subsequence in the array.

export function longestNondecreasingSubsequenceLength(list: number[]): number {
    const longestTilHere = Array(list.length).fill(1);

    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < i; j++) {
            if (list[i] >= list[j]) {
                longestTilHere[i] = Math.max(longestTilHere[i], longestTilHere[j] + 1);
            }
        }
    }

    return Math.max(...longestTilHere);
}
