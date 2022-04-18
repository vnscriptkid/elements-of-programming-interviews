// REMOVE FIRST-NAME DUPLICATES

// Design an efficient algorithm for removing all first-name duplicates from an array.
// For example, if the input is ((Ian,Botham),(David,Gower),(Ian,Bell),(Ian,Chappell)),
// one result could be ((Ian,Bell),(David,Gower));
// ((David,Gower),(Ian,Botham)) would also be acceptable.

export class Name {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sameFirstNameWith(other: Name) {
    return this.firstName === other.firstName;
  }
}

export function eliminateDuplicate(list: Name[]): Name[] {
  const result: Name[] = [];

  list.sort((a, b) =>
    a.firstName > b.firstName ? 1 : a.firstName === b.firstName ? 0 : -1
  );

  result.push(list[0]);

  // (a,b), (a,c), (a,d), (b,c)
  //                       ^

  for (let i = 1; i < list.length; i++) {
    if (list[i].firstName !== list[i - 1].firstName) {
      result.push(list[i]);
    }
  }

  return result;
}
