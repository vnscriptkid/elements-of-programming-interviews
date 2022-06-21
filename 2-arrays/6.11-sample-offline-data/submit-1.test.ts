import { randomsampling } from "./submit-1"

test('it works', () => {
    const arr = [3, 7, 5, 11];
    const result = randomsampling(3, arr)
    expect(result).toHaveLength(3);
    expect(result.every(x => arr.includes(x)));
})

