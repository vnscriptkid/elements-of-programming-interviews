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
}

export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
    return new ListNode(1);
}
