// 13.13 TEST THE COLLATZ CONJECTURE

// The Collatz conjecture is the following: Take any natural number. If it is odd, triple
// it and add one; if it is even, halve it. Repeat the processindefinitely. No matter what
// number you begin with, you will eventually arrive at 1.

// As an example, if we start with 11 we get the sequence 11,34,17,52,26,13,40,
// 20,10,5,16,8,4,2,1. Despite intense efforts, the Collatz conjecture has not been
// proved or disproved.

// Suppose you were given the task of checking the Collatz conjecture for the first
// billion integers. A direct approach would be to compute the convergence sequence
// for each number in this set.
// Test the Collatz conjecture for the first n positive integers.

export function testCollatzConjecture(n: number): boolean {
    const trurthyResult = new Set<number>();

    for (let i = 1; i <= n; i++) {
        if (checkNum(i, trurthyResult) === false) return false;
    }

    return true;
}

function checkNum(num: number, trurthyResult: Set<number>) {
    const localCached = new Set<number>();
    let cur = num;

    let loopCount = 0;

    const INFINITE_DEF = 1_000_000;

    let isCorrect = false;

    while (loopCount < INFINITE_DEF) {
        localCached.add(cur);

        if (trurthyResult.has(cur) || cur === 1) {
            isCorrect = true;
            break;
        }

        if (cur % 2 === 0) {
            // even
            cur /= 2;
        } else {
            // odd
            cur = cur * 3 + 1;
        }

        loopCount++;
    }

    if (!isCorrect) {
        isCorrect = loopCount !== INFINITE_DEF;
    }

    if (isCorrect) {
        for (let x of localCached) {
            trurthyResult.add(x);
        }
    }

    return isCorrect;
}
