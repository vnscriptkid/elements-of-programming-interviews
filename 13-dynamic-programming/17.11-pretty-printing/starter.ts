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
    return 0;
}