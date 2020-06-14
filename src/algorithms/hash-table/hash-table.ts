import { LinkedList } from '../linked-list';

const defaultHashTableSize = 32;

export class HashTable<T> {
  buckets: LinkedList<{ key: string; value: T }>[];
  keys: { [key: string]: number };

  constructor(size: number = defaultHashTableSize) {
    this.buckets = Array(size)
      .fill(null)
      .map(() => new LinkedList<{ key: string; value: T }>());
    this.keys = {};
  }

  // use polynomial string hash
  hash(key: string): number {
    const PRIME = 31;
    const hash = key
      .split('')
      .reduce(
        (hashNumber, _, i) =>
          (hashNumber + key.charCodeAt(i) * PRIME) ^ (key.length - i - 1),
        0,
      );

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length;
  }

  set(key: string, value: T): void {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  delete(key: string): boolean {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });
    if (node) {
      return bucketLinkedList.delete(node?.value);
    }
    return false;
  }

  get(key: string): T | undefined {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    return bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    })?.value.value;
  }

  has(key: string): boolean {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    return !!bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });
  }

  getKeys() {
    return Object.keys(this.keys);
  }
}
