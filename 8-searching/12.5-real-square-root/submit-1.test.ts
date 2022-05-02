import { squareRoot } from "./submit-1";

test("it works", () => {
  expect(squareRoot(16)).toEqual(4);
  expect(squareRoot(64)).toEqual(8);
  expect(squareRoot(49)).toEqual(7);
  // TODO
  //   expect(squareRoot(1 / 4)).toEqual(1 / 2);
});
