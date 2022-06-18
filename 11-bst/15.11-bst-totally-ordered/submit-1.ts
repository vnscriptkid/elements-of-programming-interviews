// 15.11 TEST IF THREE BST NODES ARE TOTALLY ORDERED

// Write a program which takes two nodes in a BST and a third node, the "middle"
// node, and determines if one of the two nodes is a proper ancestor and the other a
// proper descendant of the middle. (A proper ancestor of a node is an ancestor that
// is not equal to the node; a proper descendant is defined similarly.) 

// For example, in
// Figure 15.1 on Page 255, if the middle is Node J, your function should return true if
// the two nodes are {A,K] or {I,M}. It should return false if the two nodes are [I,P| or
// {J,K}. You can assume that all keys are unique. Nodes do not have pointers to their
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
    // node0, node1
    // 1. go dfs from node0, can we find middle along the way
    // 1.1 yes. => go dfs from middle. can we find node1 along the way
    // 1.1.1. yes. return true
    // 1.1.2. no. return false
    // 1.2 no. try 2

    if (isReachableDfs(possibleAncOrDesc0, middle)) {
        return isReachableDfs(middle, possibleAncOrDesc1);
    }

    if (isReachableDfs(possibleAncOrDesc1, middle)) {
        return isReachableDfs(middle, possibleAncOrDesc0);
    }
    
    return false;
}

function isReachableDfs(curNode: BSTNode | null, targetNode: BSTNode): boolean {
    if (curNode === null) return false;
    
    if (curNode === targetNode) return true;

    return targetNode.value > curNode.value ? 
        isReachableDfs(curNode.right, targetNode) 
        : 
        isReachableDfs(curNode.left, targetNode);
}
