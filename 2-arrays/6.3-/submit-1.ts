// MULTIPLY TWO ARBITRARY-PRECISION INTEGERS

// Write a program that takes two arrays representing integers,
// and returns an integer representing their product.

// For example, since 193707721 X -761838257287 = -147573952589676412927,
// if the inputs are (1,9,3,7,0,7,7,2,1} and (-7,6,1,8,3,8,2,5,7,2,8,7),
// your function should return (-1,4,7,5,7,3,9,5,2,5,8,9,6,7,6,4,1,2,9,2,7).

export function multiply(num1: number[], num2: number[]): number[] {
  const sign = Math.sign(num1[0] * num2[0]);

  if (num1[0] < 0) num1[0] = Math.abs(num1[0]);
  if (num2[0] < 0) num2[0] = Math.abs(num2[0]);

  let result = Array(num1.length + num2.length).fill(0);

  //     0  1
  // i [ 9, 5 ],
  // j [ 8, 7 ]

  //  0   1   2   3
  // [ 8, 2,  4,  2 ]

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let idx = i + j + 1;

      result[idx] += num1[i] * num2[j];
      result[idx - 1] += ~~(result[idx] / 10);
      result[idx] %= 10;
    }
  }

  let i = 0;
  while (result[i] === 0) i++;

  result = result.slice(i);

  if (sign < 0) {
    result[0] *= -1;
  }

  return result;
}
