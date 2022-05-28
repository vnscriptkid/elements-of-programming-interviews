// THE MOST VISITED PAGES PROBLEM

import { BinarySearchTree, BinarySearchTreeNode } from "./bst";
// You are given a server log file containing billions of lines.
// Each line contains a number of fields.
// For this problem, the relevant field is an id denoting the page that was accessed.

// Write a function to read the next line from a log file, and a function to find the k most visited pages,
// where k is an input to the function.
// Optimize performance for the situation where calls to the two functions are interleaved.
// You can assume the set of distinct pages is small enough to fit in RAM.

// As a concrete example, suppose the log file ids appear in the following order: g,a,t,t,a,a,a,g,t,c,t,a,t,
// i.e. there are four pages with ids a,c,g,t.
// After the first 10 lines have been read,
// the most common page is a with a count of 4, and the next most common page is t with a count of 3.

// 1. g, (g:1)x
// 2. a, (a:1)x
// 3. t, (t:1)x
// 4. t, (t:2)x
// 5. a, (a:2)x
// 6. a, (a:3)x
// 7. a, (a:4)
// 8. g, (g:2)
// 9. t, (t:3)
// 10. c, (c:1)
// 11. t,
// 12. a,
// 13. t,

export class MostVisitedCalculatorNaive {
  pageToNode: Record<string, BinarySearchTreeNode>;
  tree: BinarySearchTree | null;

  constructor() {
    this.pageToNode = {};
    this.tree = new BinarySearchTree();
  }

  readNextLine(page: string): void {
    let newNode: BinarySearchTreeNode;

    if (page in this.pageToNode) {
      const node = this.pageToNode[page];
      newNode = node.clone();
      this.tree!.root = this.tree?.removeNode(node);
      newNode.count += 1;
      this.tree?.insertNode(newNode);
    } else {
      newNode = new BinarySearchTreeNode(page, 1);
      this.tree?.insertNode(newNode);
    }
    this.pageToNode[page] = newNode;
  }

  findMostVisited(k: number) {
    //   To find Kth largest element in a Binary search tree,
    //   the simplest logic is to do reverse inorder traversal and
    //   while doing reverse inorder traversal simply keep a count of number of Nodes visited.
    //   When the count becomes equal to k, we stop the traversal and print the data.
    return [...this.tree?.reverseInorderTraversal()]
      .map((x) => x.page)
      .slice(0, k);
  }
}

// const cal = new MostVisitedCalculatorNaive();
// const stream = [
//   "g",
//   "a",
//   "t",
//   "t",
//   "a",
//   "a",
//   "a",
//   "g",
//   "t",
//   "c",
//   "t",
//   "a",
//   "t",
// ];
// for (let i = 0; i < stream.length; i++) {
//   cal.readNextLine(stream[i]);
//   if (i === 9) {
//     // 1. g, (g:1)x
//     // 2. a, (a:1)x
//     // 3. t, (t:1)x
//     // 4. t, (t:2)x
//     // 5. a, (a:2)x
//     // 6. a, (a:3)x
//     // 7. a, (a:4)
//     // 8. g, (g:2)
//     // 9. t, (t:3)
//     // 10. c, (c:1)
//     console.log(cal.findMostVisited(1));
//     console.log(cal.findMostVisited(2));
//     console.log(cal.findMostVisited(3));

//     // expect(cal.findMostVisited(1)).toEqual(["a"]);
//     // expect(cal.findMostVisited(2)).toEqual(["a", "t"]);
//     // expect(cal.findMostVisited(3)).toEqual(["a", "t", "g"]);
//   }
// }
