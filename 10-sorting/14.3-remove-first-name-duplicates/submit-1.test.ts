import { eliminateDuplicate, Name } from "./submit-1";

test("it works", () => {
  const result = eliminateDuplicate([
    new Name("Ian", "Botham"),
    new Name("David", "Gower"),
    new Name("Ian", "Bell"),
    new Name("Ian", "Chappell"),
  ]);

  expect(result).toHaveLength(2);

  const ian = result.find((x) => x.firstName === "Ian");
  expect(ian).not.toBeNull();
  expect(["Botham", "Bell", "Chappell"].includes(ian!.lastName));

  const david = result.find(
    (x) => x.firstName === "David" && x.lastName === "Gower"
  );
  expect(david).not.toBeNull();
});
