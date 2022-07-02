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
    return [];
}