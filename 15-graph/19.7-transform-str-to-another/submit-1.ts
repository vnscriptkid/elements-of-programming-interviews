// TRANSFORM ONE STRING TO ANOTHER

// Let s and t be strings and D a dictionary, i.e., a set of strings.
// Define s to produce t if there exists a sequence of strings from the dictionary P =(so,Si,...,s„_i )
// such that the first string is s, the last string is f,
// and adjacent strings have the same length and differ in exactly one character.
// The sequence P is called a production sequence.

// For example, if the dictionary is {bat,cot,dog,dag,dot,cat),
// then (cat,cot,dot,dog) is production sequence.

// Given a dictionary D and two strings s and t, write a program to determine if s produces t.
// Assume that all characters are lowercase alphabets.
// If s does produce f, output the length of a shortest production sequence; otherwise, output -1.

// dict { "bat", "cot", "dog", "dag", "dot" }

// queue: [  ]

// out: cat

class StringWithDistance {
  str: string;
  distance: number;

  constructor(str: string, distance: number) {
    this.str = str;
    this.distance = distance;
  }
}

export function transformstring(
  dict: Set<string>,
  s: string,
  t: string
): number {
  dict.delete(s);
  const queue: StringWithDistance[] = [new StringWithDistance(s, 0)]; // push, shift

  while (queue.length > 0) {
    const strWithDistance = queue.shift()!;

    if (strWithDistance.str === t) return strWithDistance.distance;

    const oneCharDiffStrings = findAllOneCharDiffStrings(strWithDistance.str);

    for (let candidate of oneCharDiffStrings) {
      if (dict.has(candidate)) {
        dict.delete(candidate);
        queue.push(
          new StringWithDistance(candidate, strWithDistance.distance + 1)
        );
      }
    }
  }

  return -1;
}
function findAllOneCharDiffStrings(str: string): string[] {
  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    for (let char of alphabets()) {
      const start = str.substring(0, i);
      const end = str.substring(i + 1);
      result.push(start + char + end);
    }
  }

  return result;
}

const alphabets = () =>
  Array(26)
    .fill(0)
    .map((x, i) => String.fromCharCode(i + 97));
