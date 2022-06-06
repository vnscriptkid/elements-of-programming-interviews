// THE BEDBATHANDBEYOND.COM PROBLEM

// Suppose you are designing a search engine.
// In addition to getting keywords from a page's content,
// you would like to get keywords from Uniform Resource Locators (URLs).
// For example, bedbathandbeyond.com yields the keywords "bed, bath, beyond, bat, hand"
// the first two coming from the decomposition "bed bath beyond" and the latter two coming from the decomposition "bed bat hand beyond".

// Given a dictionary i.e., a set of strings, and a name, design an efficient algorithm
// that checks whether the name is the concatenation of a sequence of dictionary words.
// If such a concatenation exists, return it.
// A dictionary word may appear more than once in the sequence,
// e.g., "a", "man", "a", "plan", "a", "canal" is a valid sequence for "amanaplanacanal".

export function decomposeIntoDictionaryWords(
  domain: string,
  dictionary: Set<string>
): string[] {
  // {"a", "man", "plan", "canal"}

  const lastLength = Array(domain.length).fill(-1);

  // ll:  1 2 1 3 1 x x x 4 1 x  x  x  x  5
  //      0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
  //      a m a n a p l a n a c  a  n  a  l

  // loop every char
  for (let i = 0; i < domain.length; i++) {
    // can we find word[0:i] in dict, if yes update lastLength
    if (dictionary.has(domain.substring(0, i + 1))) {
      lastLength[i] = i + 1;
    }

    // if no, check str[0,j] is decomposable and word[j+1, i] in dict => whole can be decomposable
    if (lastLength[i] === -1) {
      for (let j = 0; j < i; j++) {
        if (
          lastLength[j] !== -1 &&
          dictionary.has(domain.substring(j + 1, i + 1))
        ) {
          // update lastLength
          lastLength[i] = i - j;
        }
      }
    }
  }

  // go backward to build decompositions
  const decompositions: string[] = [];
  if (lastLength[domain.length - 1] !== -1) {
    let i = domain.length - 1;

    while (i >= 0) {
      // 5     8
      //   _ _ _
      const firstIdx = i - lastLength[i] + 1;
      decompositions.push(domain.substring(firstIdx, i + 1));
      i = firstIdx - 1;
    }

    decompositions.reverse();
  }

  return decompositions;
}
