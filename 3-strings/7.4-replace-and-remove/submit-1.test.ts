import { replaceAndRemove } from "./submit-1";

test("it works", () => {
  const arr: any = [
    "a",
    "c",
    "d",
    "b",
    "b",
    "c",
    "a",
    undefined,
    undefined,
    undefined,
  ];
  expect(replaceAndRemove(7, arr)).toEqual(7);
  expect(arr).toEqual([
    "d",
    "d",
    "c",
    "d",
    "c",
    "d",
    "d",
    undefined,
    undefined,
    undefined,
  ]);
  // ["d", "d", "c", "d", "c", "d", "d", undefined, undefined, undefined]
});
