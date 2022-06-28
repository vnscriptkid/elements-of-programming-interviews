// 8.12 IMPLEMENT LIST PIVOTING
// For any integer k, the pivot of a list of integers with respect to k is that list with its
// nodes reordered so that all nodes containing keys less than k appear before nodes
// containing k, and all nodes containing keys greater than k appear after the nodes
// containing k. See Figure 8.11 for an example of pivoting.

// Implement a function which takes as input a singly linked list and an integer k and
// performs a pivot of the list with respect to k. The relative ordering of nodes that
// appear before k, and after k, must remain unchanged; the same must hold for nodes
// holding keys equal to k.

export class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }

    print() {
        const buffer: any[] = [];

        for (let cur: ListNode | null = this; cur !== null; cur = cur.next) {
            buffer.push(cur.value);
        }

        buffer.push('null');
        return buffer.join('->')
    }

    insertAfter(newNode: ListNode): ListNode {
        this.next = newNode;
        return newNode;
    }
}

export function listPivoting(list: ListNode, x: number): ListNode {
    // x = 7
    // 3 -> 2 -> 2 -> 11 -> 7 -> 5 -> 11 -> null
    //                                       ^ 
    // less: dummyLess -> 3 -> 2 -> 2 -> 5 -> null
    // lessP                   ^

    // equal: dummyEqual -> 7 -> null
    // equalP:              ^

    // greater dummyEqual -> 11 -> 11 -> null
    // greaterP               ^

    // notice: remember next of cur

    const dummyLess = new ListNode(Infinity);
    const dummyEqual = new ListNode(Infinity);
    const dummyGreater = new ListNode(Infinity);

    let lastLess = dummyLess;
    let lastEqual = dummyEqual;
    let lastGreater = dummyGreater;

    let cur: ListNode | null = list;
    while (cur) {
        let rememberNext: ListNode | null = cur.next;

        if (cur.value < x) {
            lastLess = lastLess.insertAfter(cur);
        } else if (cur.value === x) {
            lastEqual = lastEqual.insertAfter(cur);
        } else {
            lastGreater = lastGreater.insertAfter(cur);
        }

        cur = rememberNext;
    }

    lastLess.next = dummyEqual.next !== null ? dummyEqual.next : dummyGreater.next;

    if (lastEqual !== dummyEqual) {
        lastEqual.next = dummyGreater.next;
    }

    return dummyLess.next || dummyEqual.next || dummyGreater.next!;
}
