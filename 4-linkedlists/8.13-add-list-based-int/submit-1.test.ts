import { addTwoNumbers, ListNode } from "./submit-1"

test('it works 1', () => {
    const head = ListNode.stringToList('3 -> 1 -> 4 -> null');

    expect(head?.print()).toEqual('3->1->4->null')
})

test('it works 2', () => {
    const list1 = ListNode.stringToList('3 -> 1 -> 4 -> null');
    const list2 = ListNode.stringToList('7 -> 0 -> 9 -> null');

    const result = addTwoNumbers(list1!, list2!);
    expect(result.print()).toEqual('0->2->3->1->null')
})

test('it works 3', () => {
    const list1 = ListNode.stringToList('3 -> 1 -> 4 -> null');
    const list2 = ListNode.stringToList('7 -> 0 -> 9 -> 9 -> null');

    const result = addTwoNumbers(list1!, list2!);
    expect(result.print()).toEqual('0->2->3->0->1->null')
})