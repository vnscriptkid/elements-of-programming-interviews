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
}

export function listPivoting(list: ListNode, x: number): ListNode {
    return new ListNode(1);
}
