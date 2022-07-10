// 6.16 THE SUDOKU CHECKER PROBLEM

// Sudoku is a popular logic-based combinatorial number placement puzzle. The objec¬
// tive istofill a 9X9 grid with digitssubject to the constraint that each column, each row,
// and each of the nine 3x3sub-grids that compose the grid contains unique integers
// in [1,9]. The grid isinitialized with a partial assignment asshown in Figure 6.2(a) on
// the following page; a complete solution isshown in Figure 6.2(b) on the next page.
// Check whether a 9 X 9 2D array representing a partially completed Sudoku is valid.
// Specifically, check that no row, column, or 3 X 3 2D subarray contains duplicates. A
// 0-value in the 2D array indicates that entry is blank; every other entry isin [1,9].

export function isValidSudoku(partialAssignment: number[][]): boolean {
    if (!checkRow(partialAssignment)) return false;
    if (!checkCol(partialAssignment)) return false;
    if (!checkSubgrid(partialAssignment)) return false;

    return true;
}
function checkRow(a: number[][]): boolean {
    for (let row of a) {
        const seen = new Seen();
        for (let x of row) {
            if (x === -1) continue;

            if (seen.has(x)) return false;

            seen.add(x);
        }
    }

    return true;
}

function checkCol(a: number[][]): boolean {
    for (let col = 0; col < 9; col++) {
        const seen = new Seen();
        for (let row of a) {
            let num = row[col];

            if (num === -1) continue;

            if (seen.has(num)) return false;

            seen.add(num);
        }
    }

    return true;
}

function checkSubgrid(a: number[][]): boolean {
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const seen = new Seen();
            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    let num = a[i][j];

                    if (num === -1) continue;

                    if (seen.has(num)) return false;

                    seen.add(num);
                }
            }
        }
    }

    return true;
}

class Seen {
    seen: boolean[];

    constructor(len = 9) {
        this.seen = new Array(len).fill(false);
    }

    has(num: number) {
        return this.seen[num - 1];
    }

    add(num: number): void {
        this.seen[num - 1] = true;
    }
}
