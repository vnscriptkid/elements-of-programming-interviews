// 15.12 THE RANGE LOOKUP PROBLEM
// Consider the problem of developing a web-service that takes a geographical loca¬
// tion, and returns the nearest restaurant. The service starts with a set of restaurant
// locations—each location includes X and Y-coordinates. A query consists of a location,
// and should return the nearest restaurant (ties can be broken arbitrarily).
// One approach is to build two BSTs on the restaurant locations: Tx sorted on
// the X coordinates, and Ty sorted on the Y coordinates. A query on location (p,q)
// can be performed by finding all the restaurants whose X coordinate isin the interval
// [p— D,p+ D],and all the restaurants whose Y coordinate isin the interval [q-D,q+D],
// taking the intersection of these two sets, and finding the restaurant in the intersection
// which is closest to (p,q). Heuristically, if D is chosen correctly, the subsets are small
// and a brute-force search for the closest point is fast. One approach is to start with a
// small value for D and keep doubling it until the final intersection is nonempty.

// There are other data structures which are more robust, e.g., Quadtrees and k-d
// trees, but the approach outlined above works well in practice.
// Write a program that takes as input a BST and an interval and returns the BST keys
// that lie in the interval. For example, for the tree in Figure 15.1 on Page 255, and
// interval [16,31], you should return 17,19, 23, 29,31.

export class Interval {
    left: number;
    right: number;

    constructor(left: number, right: number) {
        this.left = left;
        this.right = right;
    }

    includes(value: number) {
        return value >= this.left && value <= this.right;
    }
}

export class BSTNode {
    value: number;
    left: BSTNode | null;
    right: BSTNode | null;

    constructor(value: number, left: BSTNode | null = null, right: BSTNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export function rangeLookupInBST(root: BSTNode | null, interval: Interval, result: number[] = []): number[] {
    if (!root) return result;

    // case 1: [ x ]
    if (interval.includes(root.value)) {
        // go both side
        result.push(root.value);
        rangeLookupInBST(root.left, interval, result);
        rangeLookupInBST(root.right, interval, result);
    }
    // case 2: x [  ]
    else if (root.value < interval.left) {
        // go right
        rangeLookupInBST(root.right, interval, result);
    }
    // case 3: [  ] x
    else {
        // go left
        rangeLookupInBST(root.left, interval, result);
    }

    return result;
}