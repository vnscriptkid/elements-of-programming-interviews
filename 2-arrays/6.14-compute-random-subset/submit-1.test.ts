import { randomSubset } from "./submit-1"

test('it works', () => {
    expect(randomSubset(5, 3)).toHaveLength(3);
})