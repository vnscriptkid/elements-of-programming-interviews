// COMPUTE ALL MNEMONICS FOR A PHONE NUMBER

// Each digit, apart from 0 and 1, in a phone keypad corresponds to one of three or four letters
// of the alphabet, as shown in Figure 7.1 on the next page.
// Since words are easier to remember than numbers,
// it is natural to ask if a 7 or 10-digit phone number can be represented by a word.
// For example, "2276696" corresponds to "ACRONYM" as well as "ABPOMZN".

// Write a program which takes as input a phone number,
// specified as a string of digits,
// and returns all possible character sequences that correspond to the phone number.
// The cell phone keypad is specified by a mapping that takes a digit
// and returns the corresponding set of characters.
// The character sequences do not have to be legal words or phrases.

export function phoneMnemonic(phoneNumber: number[]) {}

export const MAPPING = [
  "0",
  "1",
  "ABC",
  "DEF",
  "GHI",
  "JKL",
  "MNO",
  "PQRS",
  "TUV",
  "WXYZ",
];
