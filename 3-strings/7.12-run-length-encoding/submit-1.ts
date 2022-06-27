// 7.12 IMPLEMENT RUN-LENGTH ENCODING

// Run-length encoding (RLE) compression offers a fast way to do efficient on-the-fly
// compression and decompression of strings. The idea is simple—encode successive
// repeated characters by the repetition count and the character.

// For example, the RLE
// of "aaaabcccaa" is "4a1b3c2a". The decoding of "3e4f2e" returns "eeeffffee".

// Implement run-length encoding and decoding functions. Assume the string to be
// encoded consists of letters of the alphabet, with no digits, and the string to be decoded
// is a valid encoding.

export function decoding(s: string): string {
    let result = '';

    // 3 e 4 f 2 e

    for (let i = 1; i < s.length; i += 2) {
        const [count, char] = [parseInt(s[i - 1]), s[i]]

        result += char.repeat(count);
    }

    return result;
}

export function encoding(s: string): string {
    // a a a a b c c c a a
    //         $
    //         ^

    let start = 0;
    let i = 1;
    let result = '';
    while (i < s.length) {
        while (i < s.length && s[i] === s[i - 1]) i++;

        let count = i - start;
        result += count + s[start];

        start = i;
        i++;
    }

    return result;
}
