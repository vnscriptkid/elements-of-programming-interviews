import { findAmpleCity } from "./submit-1";

test("it works", () => {
  // 20 miles / gallon
  const result = findAmpleCity(
    //C  D  E   F   G   A   B
    [5, 30, 25, 10, 10, 50, 20],
    [200, 400, 600, 200, 100, 900, 600]
  );
  expect(result).toEqual(1);
});
