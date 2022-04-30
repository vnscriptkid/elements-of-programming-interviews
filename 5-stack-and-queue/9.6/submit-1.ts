// COMPUTE BUILDINGS WITH A SUNSET VIEW

// You are given with a series of buildings that have windows facing west.
// The buildings are in a straight line, and any building
// which is to the east of a building of equal or greater height cannot view the sunset.

// Design an algorithm that processes buildings in east-to-west order and
// returns the set of buildings which view the sunset. Each building is specified by its height.

//             |
//             |
//     |     | |
// |   |   | | |
// |   | | | | |
// | | | | | | |
// | | | | | | |
// | | | | | | |
//[5 3(6)4 5 6(8)]

class Building {
  index: number;
  height: number;

  constructor(index: number, height: number) {
    this.index = index;
    this.height = height;
  }
}

export function examineBuildingsWithSunset(buildings: number[]): number[] {
  const highestLast = [new Building(0, buildings[0])];

  for (let i = 1; i < buildings.length; i++) {
    if (buildings[i] > highestLast[highestLast.length - 1].height) {
      highestLast.push(new Building(i, buildings[i]));
    }
  }

  return highestLast.map((x) => x.index);
}
