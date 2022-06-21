import { snakeString } from "./submit-1"

test('it works', () => {
    expect(snakeString('Hello World!')).toEqual('e lHloWrdlo!')
})