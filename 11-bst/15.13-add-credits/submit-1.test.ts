import { ClientsCreditsInfo } from "./submit-1";

test('it works', () => {
    const store = new ClientsCreditsInfo();

    expect(store.lookup('a')).toEqual(null);

    store.insert('a', 148);
    store.insert('b', 107);

    expect(store.lookup('c')).toEqual(null);
    expect(store.lookup('a')).toEqual(148);
    expect(store.lookup('b')).toEqual(107);

    store.insert('c', 77);

    expect(store.lookup('d')).toEqual(null);

    //                             ("a", 148)
    //                              /       \
    //                    ("b", 107)       null
    //                      /
    //              ("c", 77)
})