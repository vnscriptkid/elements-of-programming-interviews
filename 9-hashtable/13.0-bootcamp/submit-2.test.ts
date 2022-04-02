import { anagram, hashFn, ContactList } from "./submit-2";
import { randomBytes } from "crypto";

test("hashFn", () => {
  for (let _ of Array(100)) {
    const result = hashFn(randomBytes(20).toString("hex"), 5);
    expect([result >= 0, result <= 4].every((x) => x)).toBeTruthy();
  }
});

test("anagram", () => {
  const result = anagram([
    "debitcard",
    "elvis",
    "silent",
    "badcredit",
    "lives",
    "freedom",
    "listen",
    "levis",
    "money",
  ]);

  expect(result).toEqual([
    ["debitcard", "badcredit"],
    ["elvis", "lives", "levis"],
    ["silent", "listen"],
  ]);
});

test("ContactList", () => {
  expect(
    new ContactList(["thanh", "nguyen"]).equals(
      new ContactList(["nguyen", "thanh"])
    )
  ).toBeTruthy();

  expect(
    new ContactList(["thanh", "nguyen"]).equals(
      new ContactList(["nguyen", "linh"])
    )
  ).toBeFalsy();
});
