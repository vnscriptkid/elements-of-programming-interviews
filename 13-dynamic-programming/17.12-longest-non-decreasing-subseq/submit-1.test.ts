import { longestNondecreasingSubsequenceLength } from "./submit-1"

test('it works', () => {
    expect(longestNondecreasingSubsequenceLength([0, 8, 4, 12, 2, 10, 6, 14, 1, 9])).toEqual(4);
})