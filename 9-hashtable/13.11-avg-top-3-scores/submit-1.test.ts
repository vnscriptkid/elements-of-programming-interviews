import { File, findStudentWithHighestBestOfThreeScores } from "./submit-1"

test('it works', () => {
    const file = new File([
        ['a', 30],
        ['a', 40],
        ['a', 50],
        ['b', 50],
        ['a', 60],
        ['b', 80],
        ['c', 50],
        ['c', 50],
        ['c', 40],
        ['d', 50],
        ['c', 80],
    ])

    // {
    //  a: [30, 40, 50, 60]
    //  b: [50, 80]
    //  c: [50, 50, 40, 80]
    //  d: [50]
    // }

    // {
    //  a: [40, 50, 60]
    //  c: [50, 50, 80]
    // }

    expect(findStudentWithHighestBestOfThreeScores(file)).toEqual('c');
    // => c
})