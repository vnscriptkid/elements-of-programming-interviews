import { findAllSubstrings } from "./submit-1"

test('it works', () => {
    const result = findAllSubstrings('amanaplanacanal', ["can", "apl", "ana"])
    expect(result).toEqual([4])
})