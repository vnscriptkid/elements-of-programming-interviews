import {
  SortByGpaAsc,
  SortByGpaDesc,
  SortByNameAsc,
  Student,
  StudentSorter,
} from "./submit-1";

describe("sort", () => {
  const s1 = new Student("b", 2);
  const s2 = new Student("c", 6);
  const s3 = new Student("a", 3);
  const students = [s1, s2, s3];

  test("sort by name asc", () => {
    const result = new StudentSorter(new SortByNameAsc()).apply(students);

    expect(result).toEqual([s3, s1, s2]);
  });

  test("sort by gpa asc", () => {
    const result = new StudentSorter(new SortByGpaAsc()).apply(students);

    expect(result).toEqual([s1, s3, s2]);
  });

  test("sort by gpa desc", () => {
    const result = new StudentSorter(new SortByGpaDesc()).apply(students);

    expect(result).toEqual([s2, s3, s1]);
  });
});
