import { ListNode, listPivoting } from "./submit-1"

test('it works', () => {
    // 3 -> 2 -> 2 -> 11 -> 7 -> 5 -> 11 -> null

    const node11B = new ListNode(11);
    const node5 = new ListNode(5, node11B);
    const node7 = new ListNode(7, node5);
    const node11A = new ListNode(11, node7);
    const node2B = new ListNode(2, node11A);
    const node2A = new ListNode(2, node2B);
    const node3 = new ListNode(3, node2A);

    const root = listPivoting(node3, 7);


    // 3 -> 2 -> 2 -> 5 -> 7 -> 11 -> 11 -> null
    expect(root.print()).toEqual('3->2->2->5->7->11->11->null')
})