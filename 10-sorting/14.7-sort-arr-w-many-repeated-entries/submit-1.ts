// PARTITIONING AND SORTING AN ARRAY WITH MANY REPEATED ENTRIES

// Suppose you need to reorder the elements of a very large array
// so that equal elements appear together.

// For example, if the array is {b,a,c,b,d,a,b,d)
// then (a,a,b,b,b,c,d,d) is an acceptable reordering, as is (d, d,c,a,a,b,b,b).

// If the entries are integers, this reordering can be achieved by sorting the array.
// If the number of distinct integers is very small relative to the size of the array, an
// efficient approach to sorting the array is to count the number of occurrences
// of each distinct integer and write the appropriate number of each integer,
// min sorted order, to the array. When array entries are objects, with multiple fields,
// only one of which is to be used as a key, the problem is harder to solve.

// You are given an array of student objects.
// Each student has an integer-valued age field that is to be treated as a key.
// Rearrange the elements of the array so that students of equal age appear together.
// The order in which different ages appear is not important.
// How would your solution change if ages have to appear in sorted order?

// For example, consider the array
// ((Greg,14), (John,12), (Andy,11), (Jim,13), (Phil,12), (Bob,13), (Chip,13), (Tim,14)).

export class Person {
  age: number;
  name: string;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

export function groupByAge(people: Person[]) {
  // (Greg,14), (John,12), (Andy,11), (Jim,13), (Phil,12), (Bob,13), (Chip,13), (Tim,14)
  //                                                                                    ^^

  // { 14: [Greg, Tim], 12: [John, Phil], 11: [Andy], 13: [Jim, Bob, Chip] }
  //                                                    ^^

  // [ 14 14 12 12 11 13 13 13  ]
  // { 14: 0, 12: 2, 11: 4, 13: 5 }

  // prev: [4, 1]

  // first loop: build mapping { age: persons }
  // second loop: build mapping { age: startIdx }
  // third loop: place
  const ageToPeople: Record<number, Person[]> = {};
  const ageToStartIdx: Record<number, number> = {};

  for (let person of people) {
    if (!(person.age in ageToPeople)) ageToPeople[person.age] = [];
    ageToPeople[person.age].push(person);
  }

  let prev = [0, 0]; // [ startIdx, size ]
  for (const age in ageToPeople) {
    const curStartIdx = prev[0] + prev[1];

    ageToStartIdx[age] = curStartIdx;

    prev = [curStartIdx, ageToPeople[age].length];
  }

  for (let age in ageToStartIdx) {
    const students = ageToPeople[age];
    let startIdx = ageToStartIdx[age];
    let i = 0;
    while (i < students.length) {
      people[startIdx++] = students[i++];
    }
  }

  return people;
}
