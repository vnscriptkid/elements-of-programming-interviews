// FIND THE SMALLEST SUBARRAY COVERING ALL VALUES

// When you type keywords in a search engine, the search engine will return results,
// and each result contains a digest of the web page,
// i.e., a highlighting within that page of the keywords that you searched for.
// For example, a search for the keywords "Union" and "save" on a page
// with the text of the Emancipation Proclamation should return the result shown in Figure 13.1.

// My paramount object in this struggle is to save the Union,
// and is not either to save or to destroy slavery.
// If I could save the Union without freeing any slave I would do it,
// and if I could save it by freeing all the slaves I would do it;
// and if I could save it by freeing some and leaving others alone I would also do that.

// Figure 13.1: Search result with digest in boldface and search keywords underlined.
// The digest for this page is the text in boldface,
// with the keywords underlined for emphasis.
// It is the shortest substring of the page which contains all the keywords in the search.
// The problem of computing the digest is abstracted as follows.

// Write a program which takes an array of strings and a set of strings,
// and return the indices of the starting and ending index
// of a shortest subarray of the given array that "covers" the set,
// i.e., contains all strings in the set.

// As a concrete example,
// consider the array (apple, banana, apple, apple, dog, cat, apple, dog, banana, apple, cat, dog)
// and the set {banana,cat}

export function findSmallestSubarrayCoveringSet(
  paragraph: string[],
  keywords: Set<string>
) {}
