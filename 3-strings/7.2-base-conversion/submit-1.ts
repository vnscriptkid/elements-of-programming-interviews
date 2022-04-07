// BASE CONVERSION

// Write a program that performs base conversion.
// The input is a string, an integer b2,and another integer b2.
// The string represents be an integer in base b2. The output should be the string representing the integer in base b2.
// Assume 2 <= b1, b2 <= 16. Use "A" to represent 10, "B" for 11, ... , and "F" for 15.

// expect(convertBase("615", 7, 13)).toBe("1A7");
// 6 x 7^2 + 1 x 7 + 5 = 1 x 13^2 + 10 x 13 + 7 = 306

function toInt(char: any) {
  return isNaN(char) ? 10 + char.charCodeAt(0) - 65 : Number(char);
}

function toChar(int: number) {
  return int < 10 ? String(int) : String.fromCharCode(65 + int - 10);
}

export function convertBase(
  numAsString: string,
  b1: number,
  b2: number
): string {
  const isNegative = numAsString.startsWith("-");

  // convert to int
  let universalNum = 0;

  for (let i = isNegative ? 1 : 0; i < numAsString.length; i++) {
    universalNum =
      universalNum +
      toInt(numAsString.charAt(i)) * Math.pow(b1, numAsString.length - 1 - i);
  }

  // build the result iteratively
  let result = "";

  while (universalNum > 0) {
    result = toChar(universalNum % b2) + result;
    universalNum = ~~(universalNum / b2);
  }

  return isNegative ? "-" + result : result;
}
