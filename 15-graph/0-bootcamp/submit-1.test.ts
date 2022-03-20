import { canTeamABeatTeamB, MatchResult } from "./submit-1";

test("canBeat", () => {
  const matches: MatchResult[] = [
    new MatchResult("x", "y"),
    new MatchResult("y", "z"),
  ];

  expect(canTeamABeatTeamB(matches, "x", "z")).toBeTruthy();
  expect(canTeamABeatTeamB(matches, "z", "x")).toBeFalsy();
});
