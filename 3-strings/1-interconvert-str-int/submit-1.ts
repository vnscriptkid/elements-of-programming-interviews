function strToInt(str) {
  const digits = str.split("");

  let output = 0;

  let j = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === 0 && digits[i] === "-") return -output;

    const base = Math.pow(10, j++);
    const digit = +digits[i];

    output += base * digit;
  }

  return output;
}

function intToStr(num) {
  let n = num;

  // 123
  let output = "";

  while (n !== 0) {
    const digit = n % 10;

    output = digit + output;

    n = ~~(n / 10);
  }

  return output;
}

export { strToInt, intToStr };
