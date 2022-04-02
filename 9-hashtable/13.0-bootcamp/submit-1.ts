function hashFn(str: string, modulus: number): number {
  const kMult = 997;
  let val = 0;

  for (const char of str) {
    val = (val * kMult + char.charCodeAt(0)) % modulus;
  }

  return val;
}

function anagram(strings: string[]) {
  // for each str
  const group: Record<string, string[]> = {};

  for (let str of strings) {
    const sortedStr = str.split("").sort().join("");

    if (!(sortedStr in group)) group[sortedStr] = [];
    group[sortedStr].push(str);
  }

  // filter group having 1 string
  return Object.values(group).filter((x) => x.length > 1);
}

class ContactList {
  names: string[];

  constructor(names: string[]) {
    this.names = names;
  }

  equals(obj: ContactList) {
    if (obj === null || !(obj instanceof ContactList)) return false;

    return this.hashCode === obj.hashCode;
  }

  get hashCode() {
    return [...new Set(this.names)].sort().join("");
  }
}

export { hashFn, anagram, ContactList };
