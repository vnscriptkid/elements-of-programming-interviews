// TEAM PHOTO DAY—1

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

  public static validPlacementExists(backTeam: Team, frontTeam: Team): boolean {
    backTeam.players.sort((a, b) => a.height - b.height);
    frontTeam.players.sort((a, b) => a.height - b.height);

    for (let i = backTeam.players.length - 1; i >= 0; i--) {
      const nextTallestAtFront = frontTeam.players[i].height;
      const nextTallestAtBack = backTeam.players[i].height;

      if (nextTallestAtFront >= nextTallestAtBack) return false;
    }

    return true;
  }
}

Team.validPlacementExists(new Team([2, 3, 4]), new Team([1, 2, 3]));
