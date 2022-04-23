// SEARCH A POSTINGS LIST

// A postings list is a singly linked list with an additional "jump" field at each node.

// The jump field points to any other node. Figure 9.3 illustrates a postings list with four nodes.

// One way to enumerate the nodes in a postings list is to iteratively follow the next field.
// Another is to always first follow the jump field if it leads to a node that has not been explored previously,
// and then search from the next node. Call the order in which these nodes are traversed the jump-first order.

// Write recursive and iterative routines that take a postings list, and compute the jump-first order.
// Assume each node has an integer-valued field that holds the order, and is initialized to -1.

export class PostingListNode {
  value: any;
  order: number;
  next: PostingListNode | null;
  jump: PostingListNode | null;

  constructor(value: any, order = -1) {
    this.value = value;
    this.order = order;
    this.next = null;
    this.jump = null;
  }
}

export function setJumpOrderRecursively(node: PostingListNode) {}
export function setJumpOrderIteratively(node: PostingListNode) {}
