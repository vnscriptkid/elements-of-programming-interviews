// 6.11 SAMPLE OFFLINE DATA

// This problem is motivated by the need for a company to select a random subset of
// its customers to roll out a new feature to. For example, a social networking company
// may want to see the effect of a new UI on page visit duration without taking the
// chance of alienating all its usersif the rollout is unsuccessful.

// Implement an algorithm that takes as input an array of distinct elements and a size,
// and returns a subset of the given size of the array elements. All subsets should be
// equally likely. Return the result in input array itself.

export function randomsampling(k: number, A: number[]): number[] {
    for (let i = 0; i < k; i++) {
        const randomIdx = randomize(i, A.length - 1);
        [A[i], A[randomIdx]] = [A[randomIdx], A[i]];
    }

    return A.slice(0, k);
}

function randomize(from: number, to: number) {
    return from + ~~(Math.random() * (to - from + 1))
}