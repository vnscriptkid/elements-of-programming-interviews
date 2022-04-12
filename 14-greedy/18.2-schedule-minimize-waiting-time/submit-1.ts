// SCHEDULETO MINIMIZE WAITING TIME

// Given service times for a set of queries,
// compute a schedule for processing the queries that minimizes the total waiting time.
// Return the minimum waiting time.

// For example, if the service times are (2,5,1,3), if we schedule in the given order,
// the total waiting time is0+(2)+(2+5)+(2+5+1) = 17.
// If however, we schedule queries in order of decreasing service times,
// the total waiting time is 0 + (5) + (5 + 3) + (5 + 3 + 2) = 23.
// As we will see, for this example, the minimum waiting time is 10.

export function minimumTotalWaitingTime(serviceTimes: number[]) {
  // 2,5,1,3
  serviceTimes.sort((a, b) => a - b);
  // 1, 2, 3, 5
  //          ^

  let waitingTime = 0;
  let total = 0;

  for (let i = 1; i < serviceTimes.length; i++) {
    waitingTime += serviceTimes[i - 1];
    total += waitingTime;
  }

  return total;
}
