// 5.3 REVERSE BITS

// Write a program that takes a 64-bit word and returns the 64-bit word
// consisting of the bits of the input word in reverse order.

// For example, if the input is alternating 1s and Os,
// i.e.,(1010...10),the output should be alternating Os and 1s, i.e.,(0101...01).

export function reverseBits(x: number): number {
    let result = 0;

    // 1 0 1 0 0
    // original:         1
    //                   ^
    //           0 0 0 0 1 bitChecker
    //                   1

    // result:   0 0 1 0 1
    //                             
    //                   

    // check every bit of original from right to left
    // whether it's 0 or 1
    // => and the bit with 1
    // (1) & 1 = 1
    // (0) & 1 = 0

    // put it into reversed position in result
    for (let i = 0; i <= 31; i++) {
        let curBit = (x >> i) & 1;

        result = result | (curBit << (31 - i));
    }

    return result;
}
