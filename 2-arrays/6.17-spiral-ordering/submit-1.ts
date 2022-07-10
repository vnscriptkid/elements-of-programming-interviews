// 6.17 COMPUTE THE SPIRAL ORDERING OF A 2D ARRAY

// A 2D array can be written as a sequence in several orders—the most natural ones
// being row-by-row or column-by-column. In this problem we explore the problem
// of writing the 2D array in spiral order. For example, the spiral ordering for the 2D
// array in Figure 6.3(a) is (1,2,3,6,9,8,7,4,5). For Figure 6.3(b), the spiral ordering is
// <1, 2,3, 4,8,12,16,15,14,13,9,5, 6, 7,11,10).

// Write a program which takes an nxn 2D array and returns the spiral ordering of the
// array



export function matrixInSpiralOrder(squareMatrix: number[][]): number[] {
    const n = squareMatrix.length;

    let startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1;

    const ordering: number[] = [];

    while (startRow <= endRow && startCol <= endCol) {
        // top
        for (let col = startCol; col <= endCol; col++) {
            ordering.push(squareMatrix[startRow][col])
        }
        startRow++;

        // right
        for (let row = startRow; row <= endRow; row++) {
            ordering.push(squareMatrix[row][endCol])
        }
        endCol--;

        // bottom
        for (let col = endCol; col >= startCol; col--) {
            ordering.push(squareMatrix[endRow][col]);
        }
        endRow--;

        // left
        for (let row = endRow; row >= startRow; row--) {
            ordering.push(squareMatrix[row][startCol])
        }
        startCol++;
    }

    return ordering;
}
