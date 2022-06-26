// 6.12 SAMPLE ONLINE DATA

// This problem is motivated by the design of a packet sniffer that provides a uniform
// sample of packetsfor a network session.

// Design a program that takes asinput a size k,and reads packets, continuously main¬
// taining a uniform random subset of size k of the read packets.

// Hint: Suppose you have a procedure which selects k packets from the first n > k packets as
// specified. How would you deal with the (n + l)th packet

// Assumption: there are at least k elements in the stream.
export function onlineRandomSample(sequence: Iterable<string>, k: number): Random[] {
    return [];
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
    data: string[];

    constructor(data: string[]) {
        this.data = data;
    }
}