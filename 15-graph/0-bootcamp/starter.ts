// you were given a list of the outcomes of matches between pairs of teams, with each outcome being a win or loss.
// A natural question is as follows: given teams A and B, is there a sequence of teams starting with A and ending with B
// such that each team in the sequence has beaten the next team in the sequence?

export class MatchResult {
  winningTeam: string;
  losingTeam: string;

  constructor(winningTeam: string, losingTeam: string) {
    this.winningTeam = winningTeam;
    this.losingTeam = losingTeam;
  }
}

export function canTeamABeatTeamB(
  matches: MatchResult[],
  teamA: string,
  teamB: string
) {
  return false;
}
