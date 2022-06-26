// 6.12 SAMPLE ONLINE DATA

// This problem is motivated by the design of a packet sniffer that provides a uniform
// sample of packetsfor a network session.

// Design a program that takes asinput a size k,and reads packets, continuously main¬
// taining a uniform random subset of size k of the read packets.

// Hint: Suppose you have a procedure which selects k packets from the first n > k packets as
// specified. How would you deal with the (n + l)th packet

// Assumption: there are at least k elements in the stream.
export function onlineRandomSample(sequence: Iterable<string>, k: number): Random[] {
    const result: Random[] = [];

    let store: string[] = [];
    for (let char of sequence) {
        store.push(char);

        if (store.length === k) {
            result.push(new Random([...store]))
        } else if (store.length > k) {
            // random idx from 0 to n - 1
            const randomIdx = ~~(Math.random() * store.length);

            const prevRandom = result[result.length - 1];

            if (randomIdx === store.length - 1) {
                const newRandom = prevRandom.swapAndClone(store[randomIdx]);
                result.push(newRandom);
            } else {
                result.push(prevRandom.clone());
            }
        }
    }

    return result;
}

export class StreamData {
    data: string[]

    constructor(data: string[]) {
        this.data = data;
    }

    *[Symbol.iterator]() {
        for (let num of this.data) {
            yield num;
        }
    }
}

export class Random {
    clone(): Random {
        return new Random([...this.data]);
    }
    swapAndClone(newValue: string): Random {
        const cloned = this.clone();
        cloned.data[0] = newValue;
        return cloned;
    }
    data: string[];

    constructor(data: string[]) {
        this.data = data;
    }
}