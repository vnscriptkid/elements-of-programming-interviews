// THE GASUP PROBLEM

// In the gasup problem, a number of cities are arranged on a circular road.
// You need to visit all the cities and come back to the starting city.
// A certain amount of gas is available at each city.
// The amount of gas summed up over all cities is equal to the amount of gas
// required to go around the road once. Your gas tank has unlimited capacity.

// Call a city ample if you can begin at that city with an empty tank, refill at it,
// then travel through all the remaining cities, refilling at each, and return to the ample city,
// without running out of gas at any point. See Figure 18.2 for an example.

// Given an instance of the gasup problem, how would you efficiently compute an ample city?
// You can assume that there exists an ample city.

export function findAmpleCity(gallons: number[], distances: number[]) {
  // // 20 miles / gallon
  const MPG = 20;
  //  C    D     E    F    G    A    B
  // [5,  30,   25,  10,  10,  50,  20 ] GALLONS
  // [200, 400, 600, 200, 100, 900, 600] MILES
  //       ^
  //      -5    5    0    0     5   10   0
  //      25    30   10   10   55   30

  let minGas = 0;
  let minLeftover = 0;

  let prevLeftover = 0;

  for (let i = 1; i < gallons.length; i++) {
    const distanceFromPrev = distances[i - 1];

    const maxDistanceCanGoFromPrev = (prevLeftover + gallons[i - 1]) * MPG;
    const leftover = (maxDistanceCanGoFromPrev - distanceFromPrev) / MPG;

    if (leftover < minLeftover) {
      minGas = i;
      minLeftover = leftover;
    }

    prevLeftover = leftover;
  }

  return minGas;
}
