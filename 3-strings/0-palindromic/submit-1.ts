function isPalindromic(str: string) {
  const halfLength = Math.floor(str.length / 2);

  return [...Array(halfLength).keys()].every(
    (i) => str[i] === str[str.length - 1 - i]
  );
}

export { isPalindromic };
