// 13.11 COMPUTE THE AVERAGE OF THE TOP THREE SCORES

// Student test scores are recorded in a file. Each line consists of a student ID, which is
// an alphanumeric string, and an integer between 0 and 100, inclusive.

// Write a program which takes as input a file containing test scores and returns the
// student who has the maximum score averaged across his or her top three tests. If the
// student has fewer than three test scores, ignore that student.

export class File {
    studentsList: [string, number][];

    constructor(studentsList: any[]) {
        this.studentsList = studentsList;
    }

    *[Symbol.iterator]() {
        for (let [studentId, score] of this.studentsList) {
            yield { studentId, score }
        }
    }
}

export function findStudentWithHighestBestOfThreeScores(file: File): string {
    return '';
}