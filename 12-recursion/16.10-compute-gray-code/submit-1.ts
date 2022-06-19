// 16.10 COMPUTE A GRAY CODE

// An n-bit Gray code is a permutation of {0,1, 2,...,2" - 1) such that the binary rep¬
// resentations of successive integers in the sequence differ in only one place. (This
// is with wraparound, i.e., the last and first elements must also differ in only one
// place.) 

// For example, both <(000)2,(100)2,(101)2,(111)2,(110)2,(010)2,(011)2,(001)2> =
// (0, 4,5, 7,6, 2,3, 1) and (0, 1,3, 2,6, 7,5, 4) are Gray codes for n = 3.

// Write a program which takes n asinput and returns an n-bit Gray code.

export function grayCode( numBits: number): number[] {
    const seen = new Set<number>([0]);

    const result = [0];

    buildGrayCode(result, seen, numBits);

    return result;
}

function differsByOneBit(x: number, y: number) {
    const bitDiff = x ^ y;
    return bitDiff !== 0 && (bitDiff & (bitDiff - 1)) == 0;
}

function buildGrayCode(cur: number[], seen: Set<number>, numBits: number): boolean {
    if (cur.length === (1 << numBits)) {
        return differsByOneBit(cur[0], cur[cur.length - 1]);
    }
    
    for (let i = 0 ; i < numBits; i++) {
        const prevNum = cur[cur.length - 1];
        const nextCandidate = prevNum ^ (1 << i);

        if (!seen.has(nextCandidate)) {
            seen.add(nextCandidate);
            cur.push(nextCandidate)

            if (buildGrayCode(cur, seen, numBits)) return true;

            seen.delete(nextCandidate);
            cur.pop();
        }
    }

    
    return false;
}



