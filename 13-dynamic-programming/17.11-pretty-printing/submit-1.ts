// 17.11 THE PRETTY PRINTING PROBLEM

// Consider the problem of laying out text using a fixed width font. Each line can hold
// no more than a fixed number of characters. Words on a line are to be separated by
// exactly one blank. Therefore, we may be left with whitespace at the end of a line
// (since the next word will not fit in the remaining space). This whitespace is visually
// unappealing.

// Define the messiness of the end-of-line whitespace as follows. The messiness of a
// single line ending with b blank characters is b2. The total messiness of a sequence of
// lines is the sum of the messinesses of all the lines. A sequence of words can be split
// across lines in different ways with different messiness, asillustrated in Figure 17.12.

// Given text, i.e., a string of wordsseparated by single blanks, decompose the text into
// lines such that no word is split across lines and the messiness of the decomposition
// is minimized. Each line can hold no more than a specified number of characters.

export function minimumMessiness(words: string[], lineLength: number): number {
    // value at i: min messi from 0 to i
    const minMessies = Array(words.length).fill(Infinity);

    minMessies[0] = Math.pow(lineLength - words[0].length, 2)

    for (let i = 1; i < words.length; i++) {
        // first, consider putting words[i] in one line
        let leftBlank = lineLength - words[i].length;

        // initial messi at i
        minMessies[i] = minMessies[i - 1] + leftBlank * leftBlank;

        // try to include more to cur line, by extending leftward one by one
        for (let j = i - 1; j >= 0; j--) {
            leftBlank -= (1 + words[j].length);

            if (leftBlank < 0) break;

            const messiBeforeJ = j === 0 ? 0 : minMessies[j - 1];
            const curLineMessi = leftBlank * leftBlank;

            minMessies[i] = Math.min(minMessies[i], messiBeforeJ + curLineMessi);
        }
    }

    return minMessies[minMessies.length - 1];
}

const result = minimumMessiness([
    'aaa',
    'bbb',
    'c',
    'd',
    'e',
    'ff',
    'ggggggg'
], 11)