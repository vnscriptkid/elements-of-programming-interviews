import { reverseWords } from "./submit-1";

test("it works", () => {
  expect(
    reverseWords([
      "B",
      "o",
      "b",
      " ",
      "l",
      "i",
      "k",
      "e",
      "s",
      " ",
      "A",
      "l",
      "i",
      "c",
      "e",
    ])
  ).toEqual([
    "A",
    "l",
    "i",
    "c",
    "e",
    " ",
    "l",
    "i",
    "k",
    "e",
    "s",
    " ",
    "B",
    "o",
    "b",
  ]);
});
