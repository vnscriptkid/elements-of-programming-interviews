// 15.13 ADD CREDITS

// Consider a server that a large number of clients connect to. Each client isidentified by
// a string. Each client has a "credit", which is a nonnegative integer value. The server
// needs to maintain a data structure to which clients can be added, removed, queried,
// or updated. In addition, the server needs to be able to add a specified number of
// credits to all clientssimultaneously.

// Design a data structure that implements the following methods:
// • Insert: add a client with specified credit, replacing any existing entry for the client.
// • Remove: delete the specified client.
// • Lookup: return the number of credits associated with the specified client.
// • Add-to-all: increment the credit count for all current clients by the specified amount.
// • Max: return a client with the highest number of credits.

interface ClientsCreditsInfoAPI {
    insert(id: string, credit: number): void;
    remove(client: ClientNode): boolean;
    lookup(client: ClientNode): number | null;
    addToAll(amount: number): void;
    max(): ClientNode;
}

class ClientNode {
    id: string;
    credit: number;

    constructor(id: string, credit: number) {
        this.id = id;
        this.credit = credit;
    }
}

export class ClientsCreditsInfo implements ClientsCreditsInfoAPI {
    insert(id: string, credit: number): void {
        throw new Error("Method not implemented.");
    }
    remove(client: ClientNode): boolean {
        throw new Error("Method not implemented.");
    }
    lookup(client: ClientNode): number | null {
        throw new Error("Method not implemented.");
    }
    addToAll(amount: number): void {
        throw new Error("Method not implemented.");
    }
    max(): ClientNode {
        throw new Error("Method not implemented.");
    }
}