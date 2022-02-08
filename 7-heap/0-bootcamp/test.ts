import { findTopK, findTopKBetter } from "./submit-1";

test("findTopK", () => {
  const iter = {
    data: ["cat", "dog", "birddddddd", "frog", "tigerrr", "wolf"],
    *[Symbol.iterator]() {
      for (const item of this.data) {
        yield item;
      }
    },
  };

  const result = findTopK(2, iter);

  expect(result).toEqual(["tigerrr", "birddddddd"]);
});

test("findTopKBetter", () => {
  const iter = {
    data: ["cat", "dog", "birddddddd", "frog", "tigerrr", "wolf"],
    *[Symbol.iterator]() {
      for (const item of this.data) {
        yield item;
      }
    },
  };

  const result = findTopKBetter(2, iter);

  expect(result).toEqual(["tigerrr", "birddddddd"]);
});
