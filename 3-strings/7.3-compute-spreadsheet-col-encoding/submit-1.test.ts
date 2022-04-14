import { ssDecodeColID } from "./submit-1";

test("it works", () => {
  expect(ssDecodeColID("D")).toEqual(4);
  expect(ssDecodeColID("AA")).toEqual(27);
  expect(ssDecodeColID("ZZ")).toEqual(702);
});
