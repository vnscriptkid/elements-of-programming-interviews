// 6.14 COMPUTE A RANDOM SUBSET
// The set {0,1, 2,..., n- 1) has(”) = «!/((« - k)\k\) subsets of size k. We seek to design
// an algorithm that returns any one of these subsets with equal probability.
// Write a program that takes asinput a positive integer n and a size k < n,and returns
// a size-k subset of {0,1,2,...,n -1). The subsetshould be represented as an array. All
// subsetsshould be equally likely and, in addition, all permutations of elements of the
// array should be equally likely. You may assume you have a function which takes as
// input a nonnegative integer t and returns an integer in the set {0, 1, . . . ,t - 1) with
// uniform probability.


export function randomSubset(n: number, k: number): number[] {
    //  0  1  2  3  4  5
    // [a  b  c  d  e  f] n=6
    //  ^

    const idxToValue = new Map<number, number>();

    for (let i = 0; i < k; i++) {
        // i is idx of next random
        let randomIdx: number = random(i, n - 1);

        if (idxToValue.has(randomIdx) && idxToValue.has(i)) {
            // swap values
            const [curValOfRandomIdx, curValOfI] = [idxToValue.get(randomIdx)!, idxToValue.get(i)!]
            idxToValue.set(randomIdx, curValOfI);
            idxToValue.set(i, curValOfRandomIdx);
        }

        else if (idxToValue.has(randomIdx)) {
            // idxToValue does not has (i)
            let temp = idxToValue.get(randomIdx)!;
            idxToValue.set(i, temp)
            idxToValue.set(randomIdx, i)
        }

        else if (idxToValue.has(i)) {
            // idxToValue does not has (randomIdx)
            const temp = idxToValue.get(i)!
            idxToValue.set(randomIdx, temp);
            idxToValue.set(i, randomIdx);
        }

        else {
            idxToValue.set(randomIdx, i);
            idxToValue.set(i, randomIdx);
        }
    }

    const result: number[] = [];

    for (let i = 0; i < k; i++) {
        result.push(idxToValue.get(i)!);
    }

    return result;
}

function random(start: number, end: number): number {
    return start + Math.floor(Math.random() * (end - start + 1));
}
