// 6.18 ROTATE A 2D ARRAY
// Image rotation isa fundamental operation in computer graphics. Figure 6.4 illustrates
// the rotation operation on a 2D array representing a bit-map of an image. Specifically,
// the image isrotated by 90 degrees clockwise.

// Write a function that takes as input an n X n 2D array, and rotates the array by
// 90 degrees clockwise.

export function rotateMatrix(squareMatrix: number[][]) {

    // [1,2,3]
    // [4,5,6]
    // [7,8,9]

    // [1,_,3]
    // [_,_,_]
    // [7,_,9]

    // [_,2,_]
    // [4,_,6]
    // [_,8,_]

    // temp = a[1][1]
    // a[1][1] <- a[1][0]
    // a[1][0] <- a[2][1]
    // a[2][1] <- a[1][2]
    // a[1][2] <- a[0][1]

    // [_1,_2,_3,_4]
    // [_5,_6,_7,_8]
    // [_9,10,11,12]
    // [13,14,15,16]

    const n = squareMatrix.length;
    const layers = ~~(n / 2);

    for (let i = 0; i < layers; i++) {
        const start = i;
        const end = n - i - 1;

        for (let j = start; j <= end - 1; j++) {
            let temp = squareMatrix[i][j];
            let k = j - start;
            squareMatrix[i][j] = squareMatrix[end - k][start];
            squareMatrix[end - k][start] = squareMatrix[end][end - k];
            squareMatrix[end][end - k] = squareMatrix[j][end];
            squareMatrix[j][end] = temp;
        }
        // temp = a[0][0]
        // a[0][0] <- a[2][0]
        // a[2][0] <- a[2][2]
        // a[2][2] <- a[0][2]
        // a[0][2] <- temp
    }
}
