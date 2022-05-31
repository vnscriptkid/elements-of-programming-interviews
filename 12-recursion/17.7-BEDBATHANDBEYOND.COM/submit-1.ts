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

export function decomposelntoDictionaryWords(
  domain: string,
  dictionary: Set<string>
): string[] | null {
  // { a, man, plan, canal }
  // a man a plan a canal
  // offset: 0

  return recurse(domain, dictionary, 0, []);
}

function recurse(
  input: string,
  dict: Set<string>,
  offset: number,
  cur: string[]
): string[] | null {
  if (offset === input.length) {
    return cur;
  }

  for (let i = offset + 1; i <= input.length; i++) {
    const curStr = input.substring(offset, i);

    if (dict.has(curStr)) {
      cur.push(curStr);
      const result = recurse(input, dict, i, cur);
      if (result) return result;
      cur.pop();
    }
  }

  return null;
}
