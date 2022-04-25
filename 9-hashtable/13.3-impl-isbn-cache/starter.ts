// // IMPLEMENT AN ISBN CACHE

// The International Standard Book Number (ISBN) is a unique commercial book identifier.
// It is a string of length 10. The first 9 characters are digits; the last character is a check character.
// The check character is the sum of the first 9 digits, modulo 11, with 10 represented by 'X'.
// (Modern ISBNs use 13 digits, and the check digit is taken modulo 10;
// this problem is concerned with 10-digit ISBNs.)

// Create a cache for looking up prices of books identified by their ISBN.
// You implement lookup, insert, and remove methods.
// Use the Least Recently Used (LRU) policy for cache eviction.
// If an ISBN is already present, insert should not change the price,
// but it should update that entry to be the most recently used entry.
// Lookup should also update that entry to be the most recently used entry.

// { d: 3, c: 2, b: 1.5 }

// CAPACITY: 4
// [b, c, d]

export class LRUCache {
  constructor(capacity: number) {}

  find(key: string): number {
    return 0;
  }

  insert(key: string, price: number): void {}

  remove(key: string): number {
    return 0;
  }
}
