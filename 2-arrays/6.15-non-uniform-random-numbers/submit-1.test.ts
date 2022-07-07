import { nonuniformRandomNumberGeneration } from "./submit-1"

test('it works', () => {
    const numToCount: any = {}

    for (let _ of Array(10000)) {
        let num = nonuniformRandomNumberGeneration([3, 5, 7, 11], [9 / 18, 6 / 18, 2 / 18, 1 / 18])
        expect([3, 5, 7, 11].includes(num)).toBeTruthy();

        if (!(num in numToCount)) numToCount[num] = 0;
        numToCount[num]++;
    }

    console.log({ numToCount })

    expect(Math.abs(numToCount[3] - 5_000) < 1_00).toBeTruthy()
    expect(Math.abs(numToCount[5] - 3_333) < 1_00).toBeTruthy()
    expect(Math.abs(numToCount[7] - 1_111) < 1_00).toBeTruthy()
    expect(Math.abs(numToCount[11] - 555) < 50).toBeTruthy()
})