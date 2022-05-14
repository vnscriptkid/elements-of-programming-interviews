// 13.6 FINDTHE NEAREST REPEATED ENTRIES IN AN ARRAY

// People do not like reading text in which a word is used multiple times
// in a short paragraph. You are to write a program which helps identify such a problem.

// Write a program which takes as input an array
// and finds the distance between a closest pair of equal entries.

// For example, if s =
//   0      1      2       3       4      5      6        7     8       9     10     11    12     13
// ("All", "work", "and", "no", "play", "makes", "for", "no", "work", "no", "fun", "and", "no", "results"),
//                                                             ^

/*
{
    all: [0],
    work: [1],
    and: [2],
    no: [3, 7, 9, 12],
    play: [4],
    makes: [5],
    for: [6],
    work: [8],
    fun: [10],
    and: [11],
    results: [13]
}
 */
// then the second and third occurrences of "no" is the closest pair.

export function findNearestRepetition(paragraph: string[]) {}
