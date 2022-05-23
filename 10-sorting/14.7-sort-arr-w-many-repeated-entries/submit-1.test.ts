import { groupByAge, Person } from "./submit-1";

test("it works", () => {
  const result = groupByAge([
    new Person("Greg", 14),
    new Person("John", 12),
    new Person("Andy", 11),
    new Person("Jim", 13),
    new Person("Phil", 12),
    new Person("Bob", 13),
    new Person("Chip", 13),
    new Person("Tim", 14),
  ]);

  expect(result).toEqual([
    new Person("Andy", 11), // 11
    new Person("John", 12), // 12
    new Person("Phil", 12),
    new Person("Jim", 13), // 13
    new Person("Bob", 13),
    new Person("Chip", 13),
    new Person("Greg", 14), // 14
    new Person("Tim", 14),
  ]);
});
