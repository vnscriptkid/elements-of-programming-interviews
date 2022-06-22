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
}

export function isLinkedListAPalindrome(list: ListNode): boolean { return false; }
