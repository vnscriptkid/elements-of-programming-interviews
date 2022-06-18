// 15.11 TEST IF THREE BST NODES ARE TOTALLY ORDERED

// Write a program which takes two nodes in a BST and a third node, the "middle"
// node, and determines if one of the two nodes is a proper ancestor and the other a
// proper descendant of the middle. (A proper ancestor of a node is an ancestor that
// is not equal to the node; a proper descendant is defined similarly.) For example, in
// Figure 15.1 on Page 255, if the middle is Node /, your function should return true if
// the two nodes are {A,K] or j/,M|. It should return false if the two nodes are [1,P| or
// {],K}. You can assume that all keys are unique. Nodes do not have pointers to their
// parents

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

export function pairIncludesAncestorAndDescendantOfM(possibleAncOrDesc0: BSTNode, possibleAncOrDesc1: BSTNode, middle: BSTNode): boolean {
    return false;
}