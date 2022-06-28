// 13.12 COMPUTE ALL STRING DECOMPOSITIONS

// This problem is concerned with taking a string (the "sentence" string) and a set
// of strings (the "words"), and finding the substrings of the sentence which are the
// concatenation of all the words (in any order). For example, if the sentence string
// is "amanaplanacanal" and the set of words is {"can","apl","ana"), "aplanacan" is a
// substring of the sentence that is the concatenation of all words.

// Write a program which takes asinput a string (the "sentence") and an array of strings
// (the "words"), and returns the starting indices of substrings of the sentence string

export function findAllSubstrings(s: string, words: string[]): number[] {
    const result: number[] = [];
    // "can","apl","ana"

    // a m a n a p l a n a c a n a l
    //         ^
    //                     $   

    // "can": 0,"apl": 0,"ana": 0
    // left: 0

    // build map wordToCount
    let originalWordToCount: Record<string, number> = {};
    for (let word of words) {
        if (!(word in originalWordToCount)) originalWordToCount[word] = 0;
        originalWordToCount[word]++;
    }

    // interate every char i, checking if substring starting at i is valid, by extending window, stop early if invalid
    const wordLen = words[0].length; s
    for (let i = 0; i < s.length; i++) {
        // here checking substring starting at index i
        let j = i;
        let wordToCount = { ...originalWordToCount };
        let matchesLeft = Object.keys(wordToCount).length;
        while (j < s.length && j + wordLen - 1 < s.length) {
            let curWord = s.substring(j, j + wordLen);

            if (!(curWord in wordToCount)) break;

            wordToCount[curWord]--;

            if (wordToCount[curWord] < 0) {
                matchesLeft++;
                break;
            }

            if (wordToCount[curWord] === 0) matchesLeft--;
            j += wordLen;
        }

        if (matchesLeft === 0) result.push(i);
    }
    // keep track of left, exit and save when left = 0 

    return result;
}
