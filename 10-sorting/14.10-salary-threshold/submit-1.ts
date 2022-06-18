// 14.10 COMPUTE A SALARY THRESHOLD

// You are working in the finance office for ABC corporation. ABC needs to cut payroll
// expenses to a specified target. The chief executive officer wants to do this by putting
// a cap on last year'ssalaries. Every employee who earned more than the cap last year
// will be paid the cap this year; employees who earned no more than the cap will see
// no change in their salary.

// For example, if there were five employees with salaries last year were
// $90,$30,$100,$40, and $20, and the target payroll this year is $210, then 60 is a
// suitable salary cap, since 60 + 30 + 60 + 40 + 20 = 210.
// Design an algorithm for computing the salary cap, given existing salaries and the
// target payroll.

export function findSalaryCap( targetPayroll: number , currentSalaries: number[]): number {
    
    const n = currentSalaries.length;
    currentSalaries.sort((a, b) => a - b);
    // 20,   30,  40,  90,   100
    
    // 100, 140,  170, 270,  280    

    // 20 + 20 * 4 = 100
    // 50 + 30 * 3 = 140
    // 90 + 40 * 2 = 170
    // 180 + 90 * 1 = 270
    //               280


    const totalIfCapAt = Array(n).fill(0);
    const sumTillNow = Array(n).fill(0);

    currentSalaries.forEach((x, i) => {
        sumTillNow[i] = i > 0 ? sumTillNow[i - 1] + x : x;
        let totalCap = (n - (i + 1)) * x;
        totalIfCapAt[i] = sumTillNow[i] + totalCap;
    })

    for (let i = 1; i < totalIfCapAt.length; i++) {
        let left = totalIfCapAt[i - 1];
        let right = totalIfCapAt[i];
        
        if (left <= targetPayroll && targetPayroll <= right) {
            const fixedValue = sumTillNow[i - 1];
            const numOfCaps = n - i;

            return (targetPayroll - fixedValue) / numOfCaps;
        }
    }
    
    return -1;
}
