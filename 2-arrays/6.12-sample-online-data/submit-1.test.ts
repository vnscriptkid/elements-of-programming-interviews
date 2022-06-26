import { onlineRandomSample, Random, StreamData } from "./submit-1"

test('it works', () => {
    // suppose k = 2, and the packets are read in the order p,q,r,t,u,v

    const result = onlineRandomSample(new StreamData([
        'p', 'q', 'r', 't', 'u', 'v',
    ]), 2);

    expect(result).toHaveLength(5)

    result.forEach(x => {
        expect(x instanceof Random).toBeTruthy();
        expect(x.data).toHaveLength(2);
    })

    console.log(result);
})