import { isLinkedListAPalindrome, ListNode } from "./submit-1"

test('it works 1', () => {
    const node1A = new ListNode(1);
    const node2A = new ListNode(2);
    const node3 = new ListNode(3);
    const node2B = new ListNode(2);
    const node1B = new ListNode(1);

    node1A.next = node2A;
    node2A.next = node3;
    node3.next = node2B;
    node2B.next = node1B;

    // 1 => 2 => 3 => 2 => 1 => null

    expect(isLinkedListAPalindrome(node1A)).toEqual(true);
    expect(node1A.print()).toEqual('1->2->3->2->1->null')

    expect(node1A.next).toEqual(node2A);
    expect(node2A.next).toEqual(node3);
    expect(node3.next).toEqual(node2B);
    expect(node2B.next).toEqual(node1B);
    expect(node1B.next).toEqual(null);
})

test('it works 2', () => {
    const node1A = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node1B = new ListNode(1);

    node1A.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node1B;

    // 1 => 2 => 3 => 4 => 1 => null
    expect(isLinkedListAPalindrome(node1A)).toEqual(false);
})