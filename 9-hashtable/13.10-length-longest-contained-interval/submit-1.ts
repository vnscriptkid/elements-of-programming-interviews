// 13.10 FIND THE LENGTH OF A LONGEST CONTAINED INTERVAL

// Write a program which takes asinput a set of integers represented by an array, and
// returns the size of a largest subset of integers in the array having the property that if
// two integers are in the subset, then so are all integers between them. For example, if
// the input is(3,-2,7,9,8,1,2,0,-1,5,8), the largest such subset is{-2,-1,0,1,2,3),so
// you should return 6.

// Hint: Do you really need a total ordering on the input?

export function longestContainedRange(list: number[]): number {
    const set = new Set<number>();
    list.forEach(x => set.add(x));

    let longest = 0;

    list.forEach(x => {
        let curRange = 1;
        let left = x - 1;
        let right = x + 1;
        while (set.has(left)) {
            curRange++;
            set.delete(left);
            left--;
        }

        while (set.has(right)) {
            curRange++;
            set.delete(right);
            right++;
        }
        set.delete(x);
        longest = Math.max(longest, curRange);
    })
    
    return longest;
}