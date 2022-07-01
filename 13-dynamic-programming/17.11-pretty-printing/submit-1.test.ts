import { minimumMessiness } from "./submit-1"

test('it works', () => {
    const result = minimumMessiness([
        'aaa',
        'bbb',
        'c',
        'd',
        'ee',
        'ff',
        'ggggggg'
    ], 11)

    expect(result).toEqual(36)
})