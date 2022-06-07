class MatchResult {
  winningTeam: string;
  losingTeam: string;

  constructor(winningTeam: string, losingTeam: string) {
    this.winningTeam = winningTeam;
    this.losingTeam = losingTeam;
  }
}

function canTeamABeatTeamB(
  matches: MatchResult[],
  teamA: string,
  teamB: string
) {
  return isReachableDFS(buildGraph(matches), teamA, teamB);
}

function buildGraph(matches: MatchResult[]) {
  const graph = new Map<string, string[]>();

  for (let { winningTeam, losingTeam } of matches) {
    if (!graph.has(winningTeam)) graph.set(winningTeam, []);
    graph.get(winningTeam)!.push(losingTeam);
  }
  return graph;
}

function isReachableDFS(
  graph: Map<string, string[]>,
  cur: string,
  target: string,
  visited: Set<string> = new Set()
) {
  if (cur === target) return true;

  if (visited.has(cur)) return false;

  if (!graph.has(cur)) return false;

  visited.add(cur);

  for (let dest of graph.get(cur)!) {
    if (isReachableDFS(graph, dest, target, visited)) return true;
  }

  return false;
}

export { canTeamABeatTeamB, MatchResult };
