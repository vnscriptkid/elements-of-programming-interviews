// 8.13 ADD LIST-BASED INTEGERS

// A singly linked list whose nodes contain digits can be viewed as an integer, with the
// least significant digit coming first. Such a representation can be used to represent
// unbounded integers. This problem is concerned with adding integers represented in
// this fashion. See Figure 8.12 for an example

// Write a program which takes two singly linked lists of digits, and returns the list
// corresponding to the sum of the integers they represent. The least significant digit
// comes first.

// l1: 3 -> 1 -> 4 -> null
// l2: 7 -> 0 -> 9 -> null

// result: 0 -> 2 -> 3 -> 1 -> null

export class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }

    print(): string {
        const buffer = [];

        for (let cur: ListNode | null = this; cur !== null; cur = cur.next) {
            buffer.push(cur.value);
        }

        buffer.push('null')

        return buffer.join('->');
    }

    static stringToList(str: string): ListNode {
        str = str.replace(/ /g, '')
        const values = str.split('->');
        let prevNode: ListNode | null = null;
        let head: ListNode | null = null;

        for (let val of values) {
            if (val !== 'null') {
                let curNode: ListNode = new ListNode(JSON.parse(val));
                if (prevNode !== null) {
                    prevNode.next = curNode;
                } else {
                    // cur is the head
                    head = curNode;
                }
                prevNode = curNode;
            }
        }

        return head!;
    }
}

export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
    // l1: 3 -> 1 -> 4 -> null
    //                    p1
    // l2: 7 -> 0 -> 9 -> null
    //                    p2

    // sum 1
    // prev = n3
    // remainder = 1
    //     n10 ->  n2 ->  n3
    let p1: ListNode | null = l1, p2: ListNode | null = l2;

    let prev: ListNode | null = null;
    let head: ListNode | null = null;
    let remainder = 0;

    while (p1 || p2 || remainder) {
        let sum = 0;
        if (p1) sum += p1.value;
        if (p2) sum += p2.value;
        sum += remainder;

        let curNodeValue = sum % 10;
        remainder = ~~(sum / 10);

        let newNode = new ListNode(curNodeValue);

        // connect nodes
        if (prev) {
            prev.next = newNode;
        } else {
            head = newNode;
        }

        // reassign prev
        prev = newNode;

        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
    }

    return head!;
}
