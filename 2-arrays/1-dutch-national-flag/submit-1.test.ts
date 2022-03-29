import { dutchFlagPartition } from "./submit-1";

test("dutchFlagPartition 1", () => {
  const list = [0, 0, 2, 2, 1, 1, 1];
  // [0,0,1,2,2,1,1]

  dutchFlagPartition(3, list);

  list.forEach((x, i) => {
    if (i <= 1) expect(x === 0).toBeTruthy();
    else expect([1, 2].includes(x)).toBeTruthy();
  });
});

test("dutchFlagPartition 1", () => {
  const list = [0, 1, 2, 0, 2, 1, 1];

  dutchFlagPartition(2, list);

  list.forEach((x, i) => {
    if (i >= list.length - 2) expect(x === 2).toBeTruthy();
    else expect([0, 1].includes(x)).toBeTruthy();
  });
});
