import { findSalaryCap } from "./submit-1"

test('it works', () => {
    expect(findSalaryCap(210, [20,30,100,40,200])).toEqual(60);
}) 