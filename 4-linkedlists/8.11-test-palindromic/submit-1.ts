// 8.11 TEST WHETHER A SINGLY LINKED LIST IS PALINDROMIC

// It isstraightforward to check whether the sequence stored in an array is a palindrome.
// However, if this sequence is stored as a singly linked list, the problem of detecting
// palindromicity becomes more challenging. See Figure 8.1 on Page 112 for an example
// of a palindromic singly linked list.

// Write a program that tests whether a singly linked list is palindromic.

export class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }

    print() {
        let cur: ListNode | null = this;
        const buffer = [];
        while (cur) {
            buffer.push(cur.value)
            cur = cur.next;
        }
        return buffer.join('->') + '->null'
    }
}

export function isLinkedListAPalindrome(head: ListNode): boolean {
    if (!head) return false;

    // 1 => 2 => 3 => 2 => 1 => null
    //           ^

    // 1 => 2 => 3 <= 2 <= 1
    const middle: ListNode = getMiddleNode(head);

    const newHead = reverse(middle);

    let p1: ListNode | null = head, p2: ListNode | null = newHead;

    while (p1 && p2 && p1 !== p2) {
        if (p1.value !== p2.value) return false;

        p1 = p1.next;
        p2 = p2.next;
    }

    // 1 -> 2 -> 3 -> 4 -> null
    //           ^

    reverse(newHead);

    return true;
}

function getMiddleNode(head: ListNode): ListNode {
    // 1 -> 2 -> 3 -> null
    //     ^
    //          $
    // 1 -> 2 -> 3 -> 4 -> null
    //           ^
    //                      $
    let slow = head, fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    return slow;
}

function reverse(startNode: ListNode): ListNode {
    // 1 -> 2 -> 3 -> null
    // 1 -> 2 <- 3
    //           ^
    //                $
    // 1 -> 2 -> 3 -> 4 -> null
    // 1 -> 2 -> 3 <- 4 
    //                ^
    //                    $
    let prev: ListNode | null = null;
    let cur: ListNode | null = startNode;


    while (cur) {
        let nextOfCur: any = cur.next;

        cur.next = prev;
        prev = cur;
        cur = nextOfCur;
    }

    return prev!;
}

