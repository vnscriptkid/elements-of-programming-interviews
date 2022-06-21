// 7.11 WRITE A STRING SINUSOIDALLY

// We illustrate what it means to write a string in sinusoidal fashion by means
// of an example.The string "Hello.World!" written in sinusoidal fashion is
//   e       _       l
// H   l   o   W   r   d
//       l       o       !
// (Here denotes a blank.)

// Define the snakestring of s to be the left - right top - to - bottom sequence in which
// characters appear when s is written in sinusoidal fashion.For example, the
// snakestring string for "Hello World!" is "e lHloWrdlo!".
// Write a program which takes as input a string s and returns the snakestring of s.

export function snakeString(s: string): string {
    //   e       _       l
    // H   l   o   W   r   d
    //       l       o        !
    // 0 1 2 3 4 5 6 7 8 9 10 11
    let result = '';

    // top line
    for (let i = 1; i < s.length; i += 4) {
        result += s[i];
    }

    // middle line
    for (let i = 0; i < s.length; i += 2) {
        result += s[i];
    }

    // last line
    for (let i = 3; i < s.length; i += 4) {
        result += s[i];
    }

    return result;
}