import { findSuccessor, Node } from "./submit-1"

test('it works 1', () => {
    //    1
    //  /   \
    // (2)   3
    const node1 = new Node(1);
    const node2 = new Node(2, null, null, node1);
    const node3 = new Node(3, null, null, node1);

    node1.left = node2;
    node1.right = node3;
    
    expect(findSuccessor(node2)).toEqual(node1)
})

test('it works 2', () => {
    //   (1)
    //  /   \
    // 2     3
    const node1 = new Node(1);
    const node2 = new Node(2, null, null, node1);
    const node3 = new Node(3, null, null, node1);

    node1.left = node2;
    node1.right = node3;
    
    expect(findSuccessor(node1)).toEqual(node3)
})

test('it works 3', () => {
    //    1
    //  /   \
    // 2    (3)
    const node1 = new Node(1);
    const node2 = new Node(2, null, null, node1);
    const node3 = new Node(3, null, null, node1);

    node1.left = node2;
    node1.right = node3;
    
    expect(findSuccessor(node3)).toEqual(null)
})

test('it works 4', () => {
    //    1
    //  /   \
    // 2     3
    //  \
    //   (4)

    const node1 = new Node(1);
    const node2 = new Node(2, null, null, node1);
    const node3 = new Node(3, null, null, node1);

    node1.left = node2;
    node1.right = node3;
    
    expect(findSuccessor(node3)).toEqual(null)
})