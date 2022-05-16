import { Item, optimumSubjectToCapacity } from "./submit-1";

test("it works", () => {
  const result = optimumSubjectToCapacity(
    [new Item(5, 60), new Item(3, 50), new Item(4, 70), new Item(2, 30)],
    5
  );

  expect(result).toEqual(80);
});
