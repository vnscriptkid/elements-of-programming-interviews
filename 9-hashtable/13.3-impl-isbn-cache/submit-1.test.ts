import { LRUCache } from "./submit-1";

test("it works", () => {
  const cache = new LRUCache(3);

  cache.insert("b", 8);
  cache.insert("a", 2);
  cache.insert("c", 3);

  // ------------
  // b <=> a <=> c (FULL NOW)
  // ------------

  expect(cache.allKeys.sort()).toEqual(["a", "b", "c"]);

  cache.insert("e", 5);
  // ------------
  // a <=> c <=> e (FULL NOW)
  // ------------
  expect(cache.allKeys.sort()).toEqual(["a", "c", "e"]);

  cache.find("a");
  // ------------
  // c <=> e <=> a (FULL NOW)
  // ------------
  expect(cache.remove()).toEqual("c");
  expect(cache.allKeys.sort()).toEqual(["a", "e"]);
});
