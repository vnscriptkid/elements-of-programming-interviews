// TEST PALINDROMICITY

// For the purpose of this problem, define a palindromic string to be a string which
// when all the nonalphanumeric are removed it reads the same front to back ignoring case.
// For example, "A man, a plan, a canal, Panama."
// and "Able was I, ere I saw Elba!" are palindromic, but "Ray a Ray" is not.

export function isPalindrome(str: string): boolean {
  str = str.toLowerCase();

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    while (!isAlphanumeric(str[left])) left++;
    while (!isAlphanumeric(str[right])) right--;

    if (left >= right) break;

    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char: string) {
  return !!char.match(/[a-zA-Z0-9]/);
}
