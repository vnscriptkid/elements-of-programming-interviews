// TEST FOR OVERLAPPING LISTS—LISTS MAY HAVE CYCLES
// Solve Problem 8.4 on Page 119 for the case where the lists may each or both have a cycle.
// If such a node exists, return a node that appears first when traversing the lists.
// This node may not be unique—if one node ends in a cycle,
// the first cycle node encountered when traversing it may be different from
// the first cycle node encountered when traversing the second list,
// even though the cycle is the same.

// In such cases, you may return either of the two nodes.
// For example, Figure 8.7 shows an example of lists which overlap and have cycles.
// For this example, both A and B are acceptable answers.

export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// CASE 1: neither cyclic => NO overlap
// 1 -> 2 -> 3 -> 4 -> null
// 5 -> 6 -> null

// CASE 2: neither cyclic => overlap
// 1 -> 2 -> 3 -> 4 -> null
//      ^
// 5 -> 6

// CASE 3: one cyclic => NO overlap
// 1 -> 2 -> 3 -> 4
//      ^_________|
// 5 -> 6 -> null

// CASE 4: both cyclic, overlap
// 1 -> 2 -> 3 -> 4
//      ^    ^____|
// 5 -> 6

// CASE 5: both cyclic, NO overlap
// 1 -> 2 -> 3 -> 4
//           ^____|
// 5 -> 6
// ^____|

export function overlappingLists(
  L1: ListNode<number>,
  L2: ListNode<number>
): ListNode<number> {
  return new ListNode(0);
}
