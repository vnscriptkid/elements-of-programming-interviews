// IMPLEMENT AN ISBN CACHE

// The International Standard Book Number (ISBN) is a unique commercial book identifier.
// It is a string of length 10. The first 9 characters are digits; the last character is a check character.
// The check character is the sum of the first 9 digits, modulo 11, with 10 represented by 'X'.
// (Modern ISBNs use 13 digits, and the check digit is taken modulo 10;
// this problem is concerned with 10-digit ISBNs.)

// Create a cache for looking up prices of books identified by their ISBN.
// You implement lookup, insert, and remove methods.
// Use the Least Recently Used (LRU) policy for cache eviction.
// If an ISBN is already present, insert should not change the price,
// but it should update that entry to be the most recently used entry.
// Lookup should also update that entry to be the most recently used entry.

// { d: 3, c: 2, b: 1.5 }

// CAPACITY: 4
// [b, c, d]

class Node {
  key: any;
  next: Node | null;
  prev: Node | null;
  price: number;

  constructor(
    key: any,
    price: number = 0,
    next: Node | null = null,
    prev: Node | null = null
  ) {
    this.key = key;
    this.next = next;
    this.price = price;
    this.prev = prev;
  }
}

export class LRUCache {
  capacity: number;
  // queue: add to head, remove from tail
  dummyHead: Node = new Node("dummyHead");
  dummyTail: Node = new Node("dummyTail");
  keyToPrice = new Map<string, Node>();
  size: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  find(key: string): number | undefined {
    const node = this.keyToPrice.get(key);

    if (!node) return undefined;

    // { a: 1, b: 2 }

    // head <=> a <=> b <=> tail
    // find(b) => move b to head
    this.removeNode(node);

    this.addToHead(node);

    return node.price;
  }

  insert(key: string, price: number): void {
    const node = new Node(key, price);

    if (this.size === this.capacity) {
      this.removeFromTail();
    }

    //      b
    //    /    \
    // head <=> a <=> tail
    this.keyToPrice.set(node.key, node);

    this.addToHead(node);
    this.size++;
  }
  private removeFromTail() {
    if (this.size === 0) return null;

    const deletedKey = this.removeNode(this.dummyTail.prev as Node);

    this.keyToPrice.delete(deletedKey);

    this.size--;

    return deletedKey;
  }

  remove(): null | string {
    if (this.size === 0) return null;

    const deletedKey = this.removeNode(this.dummyTail.prev as Node);

    this.keyToPrice.delete(deletedKey);

    this.size--;

    return deletedKey;
  }

  private removeNode(node: Node): string {
    // a <=> (b) <=> c
    // prev         next

    const prevNode = node.prev as Node;
    const nextNode = node.next as Node;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    return node.key;
  }

  private addToHead(node: Node) {
    //      b
    //    /    \
    // head <=> a <=> tail

    const headNext = this.dummyHead.next as Node;
    this.dummyHead.next = node;
    node.prev = this.dummyHead;
    node.next = headNext;
    headNext.prev = node;

    this.keyToPrice.set(node.key, node);
  }

  get allKeys() {
    return [...this.keyToPrice.keys()];
  }
}
