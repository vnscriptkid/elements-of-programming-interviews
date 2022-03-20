// export function isPalindromic(str: string) {
//   for (let i = 0; i < ~~(str.length / 2); i++) {
//     if (str[i] !== str[str.length - 1 - i]) return false;
//   }

//   return true;
// }

export function isPalindromic(str: string) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }

  return true;
}
