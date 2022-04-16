class Student {
  name: string;
  gpa: number;

  constructor(name: string, gpa: number) {
    this.name = name;
    this.gpa = gpa;
  }

  // defautl compare by name
  compareTo(other: Student) {
    return this.name > other.name ? 1 : -1;
  }
}

interface SortSpec {
  compareTo: (a: Student, b: Student) => number;
}

class StudentSorter {
  sortSpec: SortSpec;

  constructor(sortSpec: SortSpec) {
    this.sortSpec = sortSpec;
  }

  apply(students: Student[]) {
    return students.sort(this.sortSpec.compareTo);
  }
}

// new StudentSorter(new SortByNameAsync()).apply(students)

class SortByNameAsc implements SortSpec {
  compareTo(a: Student, b: Student) {
    // a, b, c
    // return a.name > b.name ? 1 : -1;
    return a.compareTo(b);
  }
}

class SortByGpaAsc implements SortSpec {
  compareTo(a: Student, b: Student) {
    // 1 3 6
    return a.gpa - b.gpa;
  }
}

class SortByGpaDesc implements SortSpec {
  compareTo(a: Student, b: Student) {
    // 6 3 1
    return b.gpa - a.gpa;
  }
}

export { Student, SortByGpaAsc, SortByNameAsc, StudentSorter, SortByGpaDesc };
