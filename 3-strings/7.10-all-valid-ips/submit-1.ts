// 7.10 COMPUTE ALL VALID IP ADDRESSES

// A decimal string is a string consisting of digits between 0 and 9.
// Internet Protocol (IP) addresses can be written as four decimal strings separated by periods,
// e.g., 192.168.1.201.
// A careless programmer mangles a string representing an IP address
// in such a way that all the periods vanish.

// Write a program that determines where to add periods to a decimal string
// so that the resulting string is a valid IP address.
// There may be more than one valid IP address corresponding to a string,
// in which case you should print all possibilities.

// For example, if the mangled string is "19216811" then
// two corresponding IP addresses are 192.168.1.1 and 19.216.81.1.
// (There are seven other possible IP addresses for this string.)

export function getValidIpAddress(s: string): string[] {
  // 0  1  2  3  4  5  6  7 n=8
  // 1  9  2  1  6  8  1  1
  //       ^
  const result: string[] = [];

  for (let i = 1; i <= Math.min(s.length - 3, 3); i++) {
    let firstGroup = s.substring(0, i);

    if (!isValid(firstGroup)) continue;

    for (let j = i + 1; j <= Math.min(s.length - 2, i + 3); j++) {
      let secondGroup = s.substring(i, j);

      if (!isValid(secondGroup)) continue;

      for (let k = j + 1; k <= Math.min(s.length - 1, j + 3); k++) {
        let thirdGroup = s.substring(j, k);
        let fourthGroup = s.substring(k);

        if (!isValid(thirdGroup) || !isValid(fourthGroup)) continue;

        const finalIp =
          firstGroup + "." + secondGroup + "." + thirdGroup + "." + fourthGroup;

        result.push(finalIp);
      }
    }
  }

  //   1.92.1681.1
  // total: [. . .]
  // left: [.]
  // range[0,255]
  return result;
}
function isValid(group: string) {
  const num = parseInt(group);

  return num >= 0 && num <= 255;
}
