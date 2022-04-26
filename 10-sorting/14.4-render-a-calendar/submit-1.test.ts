import { Event, findMaxSimultaneousEvents } from "./submit-1";

test("it works", () => {
  expect(
    findMaxSimultaneousEvents([
      new Event(4, 5),
      new Event(9, 17),
      new Event(2, 7),
      new Event(8, 9),
      new Event(12, 15),
      new Event(1, 5),
      new Event(6, 10),
      new Event(11, 13),
      new Event(14, 15),
    ])
  ).toEqual(3);
});
