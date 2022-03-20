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
  const graph: Map<string, string[]> = buildGraph(matches);

  return isReachableDfs(graph, teamA, teamB);
}

function buildGraph(matches: MatchResult[]) {
  const graph = new Map();

  for (let { winningTeam, losingTeam } of matches) {
    if (!graph.has(winningTeam)) graph.set(winningTeam, []);
    graph.get(winningTeam).push(losingTeam);
  }

  return graph;
}

function isReachableDfs(
  graph: Map<string, string[]>,
  cur: string,
  dest: string,
  visited = new Set<string>()
) {
  if (cur === dest) return true;

  if (visited.has(cur) || !graph.has(cur)) return false;

  visited.add(cur);

  for (let nextDest of graph.get(cur)!) {
    if (isReachableDfs(graph, nextDest, dest, visited)) return true;
  }

  return false;
}
