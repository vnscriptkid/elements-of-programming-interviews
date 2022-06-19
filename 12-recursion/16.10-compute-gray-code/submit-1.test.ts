import { grayCode } from "./submit-1"

test('it works', () => {
    expect(grayCode(3)).toEqual([0,1,3,2,6,7,5,4])
})