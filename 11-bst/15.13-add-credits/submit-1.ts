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
    remove(id: string): void;
    lookup(id: string): number | null;
    addToAll(amount: number): void;
    max(): ClientNode | null;
}

export class ClientNode {
    id: string;
    credit: number;
    left: ClientNode | null = null;
    right: ClientNode | null = null;

    constructor(id: string, credit: number) {
        this.id = id;
        this.credit = credit;
    }

    clone() {
        return new ClientNode(this.id, this.credit);
    }
}

export class ClientsCreditsInfo implements ClientsCreditsInfoAPI {
    root: ClientNode | null;
    idToNode: Map<string, ClientNode>;

    constructor() {
        this.root = null;
        this.idToNode = new Map<string, ClientNode>();
    }

    insert(id: string, credit: number): void {
        if (this.idToNode.has(id)) {
            this.remove(id);
        }

        // todo: insert
        const newNode = new ClientNode(id, credit);

        this.idToNode.set(id, newNode);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let cur = this.root;
        while (cur) {
            if (newNode.credit >= cur.credit) {
                if (cur.right === null) {
                    cur.right = newNode
                    return;
                }
                cur = cur.right;
            } else {
                if (cur.left === null) {
                    cur.left = newNode;
                    return;
                }
                cur = cur.left;
            }
        }
    }

    remove(id: string) {
        const foundNode = this.idToNode.get(id);

        if (!foundNode) return;

        this.root = this.removeHelper(id, foundNode.credit)

        this.idToNode.delete(id);
    }

    removeHelper(idToDelete: string, creditToDelete: number, cur: ClientNode | null = this.root) {
        if (cur === null) {
            throw new Error('node should not be null')
        }

        if (cur.id === idToDelete) {
            // >>>>> delete this node <<<<<

            // case 1: leaf node
            //   2
            //  / \
            // 1  (3)
            if (!cur.left && !cur.right) {
                return null;
            }

            // case 2: has 1 child
            //   (2)
            //  /
            // 1 
            if (!cur.left || !cur.right) {
                return cur.left || cur.right;
            }

            // case 3: has 2 children
            //  (2)
            //  / \
            // 1   3
            const successor: ClientNode = this.findSuccessor(cur);
            const cloned = successor.clone();

            cloned.left = cur.left;
            cloned.right = this.removeHelper(successor.id, successor.credit, cur.right);

            return cloned;
        } else if (creditToDelete >= cur.credit) {
            // node to delete on the right
            cur.right = this.removeHelper(idToDelete, creditToDelete, cur.right);
        } else {
            // node to delete on the left
            cur.left = this.removeHelper(idToDelete, creditToDelete, cur.left);
        }

        return cur;
    }

    findSuccessor(node: ClientNode): ClientNode {
        // assume node.right is not null

        let cur = node;
        // go right once
        cur = cur.right!;

        // go all the way to the left
        while (cur.left !== null) cur = cur.left;

        return cur;
    }

    lookup(id: string): number | null {
        let node = this.idToNode.get(id);

        return node ? node.credit : null;
    }

    addToAll(amount: number): void {
        for (let [id, node] of this.idToNode.entries()) {
            node.credit += amount;
        }
    }

    max(): ClientNode | null {
        if (this.root === null) return null;

        let cur = this.root;

        while (cur.right !== null) cur = cur.right;

        return cur;
    }
}