// 10.11 IMPLEMENT AN INORDER TRAVERSAL WITH 0(1) SPACE

// The direct implementation of an inorder traversal using recursion has 0(h) space
// complexity, where h is the height of the tree. Recursion can be removed with an
// explicit stack, but the space complexity remains 0(h).

// Write a nonrecursive program for computing the inorder traversal sequence for a
// binary tree. Assume nodes have parent fields.

export class TreeNode {
    value: string;
    left: TreeNode | null;
    right: TreeNode | null;
    parent: TreeNode | null;

    constructor(value: string, left: TreeNode | null = null, right: TreeNode | null = null, parent: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

export function inorderTraversal(root: TreeNode): string[] {
    //       a
    //     /   \
    //    b     c
    //     \   /
    //     d  e
    const result: string[] = [];

    let prev: TreeNode | null = null;
    let cur: TreeNode | null = root;

    while (cur) {
        let next: TreeNode | null;

        if (prev === cur.parent) {
            // i'm going down => keep going down
            if (cur.left) {
                // go left first if not null
                next = cur.left;
            } else {
                result.push(cur.value);
                // no left
                next = cur.right ? cur.right : cur.parent;
            }
        }

        else if (prev === cur.left) {
            // i'm going upward, already done with my left subtree
            result.push(cur.value);

            next = cur.right ? cur.right : cur.parent;
        }

        else {
            // i'm going upward, already done with both subtrees
            next = cur.parent;
        }

        prev = cur;
        cur = next;
    }


    return result;
}

// export function inorderTraversal(root: TreeNode): string[] {
//     //       a
//     //     /   \
//     //    b     c
//     //     \   /
//     //     d  e
//     const stack: TreeNode[] = [root];
//     const result: string[] = [];
//     const checked = new Set<TreeNode>();

//     while (stack.length) {
//         const node = stack.pop()!;

//         if (checked.has(node)) {
//             result.push(node.value);
//         } else {
//             checked.add(node);
//             if (node.right) stack.push(node.right);
//             stack.push(node);
//             if (node.left) stack.push(node.left);
//         }
//     }

//     // b d a e c
//     return result;
// }