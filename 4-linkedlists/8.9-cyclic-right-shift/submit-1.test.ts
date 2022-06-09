import { cyclicallyRightShiftList, ListNode } from "./submit-1";

test("it works", () => {
  //  1    2    3    4    5
  //  a -> b -> c -> d -> e -> null
  // k = 3
  // e -> a -> b -> c -> d -> null
  // d -> e -> a -> b -> c -> null
  // c -> d -> e -> a -> b -> null

  const nodeE = new ListNode("e");
  const nodeD = new ListNode("d", nodeE);
  const nodeC = new ListNode("c", nodeD);
  const nodeB = new ListNode("b", nodeC);
  const nodeA = new ListNode("a", nodeB);

  const newRoot = cyclicallyRightShiftList(nodeA, 3);
  expect(newRoot?.value).toBe("c");
  expect(newRoot?.next?.value).toBe("d");
  expect(newRoot?.next?.next?.value).toBe("e");
  expect(newRoot?.next?.next?.next?.value).toBe("a");
  expect(newRoot?.next?.next?.next?.next?.value).toBe("b");
  expect(newRoot?.next?.next?.next?.next?.next).toBeNull();
});
