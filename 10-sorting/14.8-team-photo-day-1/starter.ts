// You are a photographer for a soccer meet.
// You will be taking pictures of pairs of opposing teams.
// All teams have the same number of players.
// A team photo consists of a front row of players
// and a back row of players. A player in the back row must
// be taller than the player in front of him, as illustrated in Figure 14.3.
// All players in a row must be from the same team.

export class Player {
  public height: number;

  constructor(h: number) {
    this.height = h;
  }
}

export class Team {
  players: Player[];

  constructor(heights: number[]) {
    this.players = heights.map((h) => new Player(h));
  }

  public static validPlacementExists(A: Team, B: Team): boolean {
    return false;
  }
}
