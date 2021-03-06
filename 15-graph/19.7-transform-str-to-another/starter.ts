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

export function transformstring(
  dict: Set<string>,
  s: string,
  t: string
): number {
  return 0;
}
