import { reverseBits } from "./submit-1"

test('it works', () => {
    // reversed: '0b00101' => 5
    expect(reverseBits(0b00110100000110001111111001110110)).toEqual(
        0b01101110011111110001100000101100
    )
})