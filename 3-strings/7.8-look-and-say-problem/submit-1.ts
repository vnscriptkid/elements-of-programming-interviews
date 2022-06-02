// 7.8 THE LOOK-AND-SAY PROBLEM

// The look-and-say sequence starts with 1.
// Subsequent numbers are derived by describing the previous number in terms of consecutive digits.
// Specifically, to generate an entry of the sequence from the previous entry, r
// ead off the digits of the previous entry, counting the number of digits in groups of the same digit.

// For example, 1; one 1; two Is; one 2 then one 1; one 1, then one 2, then two Is; three Is,
// then two 2s, then one 1.
//The first eight numbers in the look-and-say sequence are <1,11, 21,1211,111221,312211,13112221,1113213211>.

// Write a program that takes as input an integer n and
// returns the nth integer in the look-and-say sequence. Return the result as a string.

export function lookAndSay(n: number): string {
  let curNum = "1";

  for (let i = 2; i <= n; i++) {
    curNum = nextNum(curNum);
  }

  return curNum;
}

class Look {
  digit: string;
  count: number;

  constructor(digit: string, count: number) {
    this.digit = digit;
    this.count = count;
  }

  say(): string {
    return this.count + this.digit;
  }
}

function nextNum(curNum: string): string {
  // 1 1 1 2 2 1
  //             ^
  // count = 1
  // curNum = 1

  // [ {num:1,count:3}, {num:2,count:2}, {num:1,count:1}  ]

  let newNum = "";
  // go from left to right
  let count = 1;
  let digit = curNum[0];
  // group consecutive numbers that are the same
  for (let i = 1; i < curNum.length; i++) {
    if (curNum[i] === curNum[i - 1]) {
      count++;
    } else {
      newNum += new Look(digit, count).say();
      count = 1;
      digit = curNum[i];
    }
  }
  newNum += new Look(digit, count).say();
  // build up new num
  return newNum;
}
