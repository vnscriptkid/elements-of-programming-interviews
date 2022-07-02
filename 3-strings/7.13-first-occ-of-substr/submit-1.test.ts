import { rabinKarp } from "./submit-1"

test('it works', () => {
    expect(rabinKarp('GACGCCA', 'CGC')).toEqual(2)
    expect(rabinKarp('GACGCCA', 'CGCA')).toEqual(-1)
    expect(rabinKarp('GACGCCA', 'GCCA')).toEqual(3)
})