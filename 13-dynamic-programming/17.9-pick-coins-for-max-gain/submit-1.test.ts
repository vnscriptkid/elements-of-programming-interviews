import { pickUpCoins } from "./submit-1"

test('it works', () => {
    expect(pickUpCoins([10, 25, 5, 1, 10, 5])).toEqual(31);
    expect(pickUpCoins([5, 1, 10, 5])).toEqual(15);
})