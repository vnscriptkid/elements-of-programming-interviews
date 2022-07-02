import { computeRandomPermutation } from "./submit-1"

test('it works', () => {
    const result = computeRandomPermutation(4);
    expect(result).toHaveLength(4);
    expect(result.sort()).toEqual([0, 1, 2, 3]);
})