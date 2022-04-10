// Is AN ANONYMOUS LETTER CONSTRUCTIBLE?

// Write a program which takes text for an anonymous letter and text for a magazine and determines
// if it is possible to write the anonymous letter using the magazine.
// The anonymous letter can be written using the magazine if for each character in the anonymous letter,
// the number of times it appears in the anonymous letter is no more than the number of times it appears in the magazine.

// Input:
// letterText: aabc
// magazineText: aabbcc
// Output: True

// Input:
// letterText: aabc
// magazineText: abcc
// Output: False

export function isLetterConstructibleFromMagazine(
  letterText: string,
  magazineText: string
): boolean {
  const freq: any = {};

  for (let char of letterText) {
    if (!(char in freq)) freq[char] = 0;
    freq[char]++;
  }

  for (let char of magazineText) {
    if (!(char in freq)) continue;

    freq[char] -= 1;
    if (freq[char] === 0) delete freq[char];
    if (Object.keys(freq).length === 0) return true;
  }

  return false;
}
