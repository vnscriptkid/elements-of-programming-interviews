import { MostVisitedCalculatorNaive } from "./submit-1";

test("it works", () => {
  const cal = new MostVisitedCalculatorNaive();
  const stream = [
    "g",
    "a",
    "t",
    "t",
    "a",
    "a",
    "a",
    "g",
    "t",
    "c",
    "t",
    "a",
    "t",
  ];
  for (let i = 0; i < stream.length; i++) {
    cal.readNextLine(stream[i]);

    if (i === 9) {
      // 1. g, (g:1)x
      // 2. a, (a:1)x
      // 3. t, (t:1)x
      // 4. t, (t:2)x
      // 5. a, (a:2)x
      // 6. a, (a:3)x
      // 7. a, (a:4)
      // 8. g, (g:2)
      // 9. t, (t:3)
      // 10. c, (c:1)

      expect(cal.findMostVisited(1)).toEqual(["a"]);
      expect(cal.findMostVisited(2)).toEqual(["a", "t"]);
      expect(cal.findMostVisited(3)).toEqual(["a", "t", "g"]);
    }
  }
});
