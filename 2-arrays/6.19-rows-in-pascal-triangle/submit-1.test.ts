import { generatePascalTriangle } from "./submit-1"

test('it works', () => {
    expect(generatePascalTriangle(5)).toEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
    ])
})