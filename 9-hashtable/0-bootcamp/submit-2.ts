export function anagram(strList: string[]) {
  const map: Record<string, string[]> = {};

  for (let str of strList) {
    const sortedStr = str.split("").sort().join("");
    if (!(sortedStr in map)) map[sortedStr] = [];
    map[sortedStr].push(str);
  }

  return Object.values(map).filter((x) => x.length > 1);
}

export function hashFn(str: string, modulus: number): number {
  let hashValue = 0;
  const kMult = 997;

  for (let char of str) {
    const charInt = char.charCodeAt(0);
    hashValue = (hashValue * kMult + charInt) % modulus;
  }

  return hashValue;
}

export class ContactList {
  list: string[];

  constructor(list: string[]) {
    this.list = list;
  }

  equals(other: ContactList) {
    if (!other || !(other instanceof ContactList)) return false;

    return this.hashCode === other.hashCode;
  }

  get hashCode() {
    return [...new Set(this.list)].sort().join("");
  }
}
