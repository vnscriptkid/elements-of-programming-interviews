// 13.11 COMPUTE THE AVERAGE OF THE TOP THREE SCORES

// Student test scores are recorded in a file. Each line consists of a student ID, which is
// an alphanumeric string, and an integer between 0 and 100, inclusive.

// Write a program which takes as input a file containing test scores and returns the
// student who has the maximum score averaged across his or her top three tests. If the
// student has fewer than three test scores, ignore that student.

const Heap = require('collections/heap')

export class File {
    studentsList: [string, number][];

    constructor(studentsList: [string, number][]) {
        this.studentsList = studentsList;
    }

    *[Symbol.iterator]() {
        for (let [studentId, score] of this.studentsList) {
            yield { studentId, score }
        }
    }
}

export function findStudentWithHighestBestOfThreeScores(file: File): string {
    const studentToScores: Record<string, typeof Heap> = {};

    for (let x of file) {
        if (!(x.studentId in studentToScores)) studentToScores[x.studentId] = new Heap([], null, (a: any, b: any) => b - a);

        const scores = studentToScores[x.studentId];

        if (scores.length < 3) {
            scores.add(x.score);
        } else if (x.score > scores.peek()) {
            scores.pop();
            scores.add(x.score);
        }
    }

    let [bestStudent, bestAvgScore] = ['', 0];

    for (let student in studentToScores) {
        if (studentToScores[student].length === 3) {
            const total = studentToScores[student].content.reduce((a: number, b: number) => a + b, 0)
            const avg = total / 3;

            if (avg > bestAvgScore) {
                bestStudent = student;
                bestAvgScore = avg;
            }
        }
    }

    return bestStudent;
}
