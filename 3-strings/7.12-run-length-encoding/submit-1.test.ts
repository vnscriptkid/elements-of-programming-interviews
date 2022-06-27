import { decoding, encoding } from "./submit-1"

test('it works', () => {
    expect(encoding('aaaabcccaa')).toEqual('4a1b3c2a')
    expect(decoding('3e4f2e')).toEqual('eeeffffee')
})