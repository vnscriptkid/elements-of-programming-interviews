// 8.10 IMPLEMENT EVEN-ODD MERGE

// Consider a singly linked list whose nodes are numbered starting at 0.
// Define the even-odd merge of the list to be the list consisting of the even-numbered nodes
// followed by the odd-numbere-d nodes. The ev-en-odd merge i-s illustrated in -Figure 8.10.

export class ListNode {
  constructor(public value: number, public next: ListNode | null = null) {}
}

export function evenOddMerge(list: ListNode): ListNode {
  // input: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
  // output: 0 -> 2 -> 4 -> 1 -> 3 -> 5 -> null
  return new ListNode(0);
}
