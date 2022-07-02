// 6.13 COMPUTE A RANDOM PERMUTATION

// Generating random permutationsis not asstraightforward asitseems. For example,
// iterating through (0,1, 1} and swapping each element with another randomly
// selected element does not generate all permutations with equal probability. One way
// to see this is to consider the case n = 3. The number of permutations is 3! = 6. The
// total number of ways in which we can choose the elements to swap is 33 = 27 and
// all are equally likely. Since 27 is not divisible by 6,some permutations correspond to
// more ways than others,so not all permutations are equally likely.

// Design an algorithm that creates uniformly random permutations of {0,1 1).
// Youaregiven a randomnumbergenerator thatreturnsintegersin theset{0,1,...,«-1)
// with equal probability; use asfew calls to it as possible.

export function computeRandomPermutation(n: number): number[] {
    // n = 4
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i);
    }

    // [0,1,2,3]

    for (let i = 0; i < n; i++) {
        let randomIdx = random(i, n - 1);

        [nums[randomIdx], nums[i]] = [nums[i], nums[randomIdx]]
    }

    return nums;
}

function random(start: number, end: number): number {
    // [3,5]
    // [0,2] [0+3,2+3] => [3,5]
    const diff = end - start; // 2

    const randNum = Math.floor(Math.random() * (diff + 1))
    // [start, start + diff]

    return randNum + start;
}
