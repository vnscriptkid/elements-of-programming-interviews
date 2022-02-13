// greatest common divisor

function gcd(a: number, b: number): number {
  const [max, min] = [Math.max(a, b), Math.min(a, b)];

  return min === 0 ? max : gcd(max % min, min);
}

export { gcd };
