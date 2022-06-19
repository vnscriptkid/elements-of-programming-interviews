// 17.9 PICK UP COINS FOR MAXIMUM GAIN

// In the pick-up-coins game, an even number of coins are placed in a line, as in Fig¬
// ure 17.11. Two players take turns at choosing one coin each—they can only choose
// from the two coins at the ends of the line. The game ends when all the coins have
// been picked up. The player whose coins have the higher total value wins. A player
// cannot pass his turn.

// Design an efficient algorithm for computing the maximum total value for the starting
// player in the pick-up-coins game.

export function pickUpCoins(coins: number[]): number {
    const dp: any[] = Array(coins.length).fill(null).map(() => Array(coins.length).fill(0))

    // init vertical line
    for (let i = 0; i < coins.length; i++) {
        dp[i][i] = [coins[i], 0]
    }

    let nextIandJ = [0, 1];

    let [i, j] = nextIandJ;
    while (true) {
        const firstChoiceMaxGain = coins[i] + dp[i + 1][j][1];
        const secondChoiceMaxGain = coins[j] + dp[i][j - 1][1];

        if (firstChoiceMaxGain > secondChoiceMaxGain) {
            dp[i][j] = [firstChoiceMaxGain, dp[i + 1][j][0]]
        } else {
            dp[i][j] = [secondChoiceMaxGain, dp[i][j - 1][0]]
        }

        if (i === 0 && j === coins.length - 1) break;

        i++; j++;


        if (j === coins.length) {
            nextIandJ = [0, nextIandJ[1] + 1]
            i = nextIandJ[0];
            j = nextIandJ[1];
        }

    }

    return dp[0][coins.length - 1][0];
}