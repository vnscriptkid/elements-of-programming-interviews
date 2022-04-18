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
}

export function eliminateDuplicate(list: Name[]): Name[] {
  return [];
}
