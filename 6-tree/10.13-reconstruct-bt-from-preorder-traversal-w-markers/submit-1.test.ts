import { reconstructPreorder } from "./submit-1";

test('it works', () => {
    const result = reconstructPreorder(
        ['H', 'B', 'F', null, null, 'E', 'A', null, null, null, 'C', null, 'D', null, 'G', 'I', null, null, null]
    )

    const nodeH = result!;
    const nodeB = nodeH.left!;
    const nodeC = nodeH.right!;

    const nodeF = nodeB.left!;
    const nodeE = nodeB.right!;

    const nodeA = nodeE.left!;

    const nodeD = nodeC.right!;
    const nodeG = nodeD.right!;
    const nodeI = nodeG.left!;

    expect(nodeH.value).toEqual('H');
    expect(nodeB.value).toEqual('B');
    expect(nodeC.value).toEqual('C');
    expect(nodeF.value).toEqual('F');
    expect(nodeE.value).toEqual('E');
    expect(nodeA.value).toEqual('A');
    expect(nodeD.value).toEqual('D');
    expect(nodeG.value).toEqual('G');
    expect(nodeI.value).toEqual('I');
})