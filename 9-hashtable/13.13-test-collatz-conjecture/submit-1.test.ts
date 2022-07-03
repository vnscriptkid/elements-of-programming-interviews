import { testCollatzConjecture } from "./submit-1"

test('it works', () => {
    expect(testCollatzConjecture(100)).toBeTruthy();
    expect(testCollatzConjecture(1000)).toBeTruthy();
})