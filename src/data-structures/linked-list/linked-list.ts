import type {Nullable} from '../../utils';

import { LinkedListNode } from './linked-list-node';

export class LinkedList<T> {
  #head: Nullable<LinkedListNode<T>>;
  #tail: Nullable<LinkedListNode<T>>;

  static fromArray<T>(arr: T[]): LinkedList<T> {
    const linkedList = new LinkedList<T>();

    arr.forEach(value => linkedList.append(value));

    return linkedList;
  }

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  getHead(): Nullable<LinkedListNode<T>> {
    return this.#head;
  }

  getTail(): Nullable<LinkedListNode<T>> {
    return this.#tail;
  }

  append(value: T): LinkedList<T> {
    const newNode = new LinkedListNode(value);

    if (!this.#head || !this.#tail) {
      this.#head = newNode;
      this.#tail = newNode;

      return this;
    }

    this.#tail.setNext(newNode);
    this.#tail = newNode;

    return this;
  }

  prepend(value: T): LinkedList<T> {
    const newNode = new LinkedListNode(value);

    if (!this.#head || !this.#tail) {
      this.#head = newNode;
      this.#tail = newNode;

      return this;
    }

    newNode.setNext(this.#head);
    this.#head = newNode;

    return this;
  }

  search(value: T): boolean {
    let current = this.#head;

    while (current) {
      if (current.getValue() === value) {
        return true;
      }

      current =current.getNext();
    }

    return false;
  }

  delete(value: T): boolean {
    if (!this.#head || !this.#tail) {
      return false;
    }

    let current = this.#head;

    if (current.getValue() === value) {
      if (this.#head === this.#tail) {
        this.#head = null;
        this.#tail = null;

        return true;
      }

      this.#head = this.#head.getNext();
      return true;
    }

    while (current.getNext() && current.getNext()?.getValue() !== value) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      current = current.getNext()!;
    }

    const next = current.getNext();

    if (next === null) {
      return false;
    }

    if (next === this.#tail) {
      this.#tail = current;
      this.#tail.setNext(null);

      return true;
    }

    current.setNext(next.getNext());

    return true;
  }

  traverse(callback: (value: T) => void): void {
    if (!this.#head || !this.#tail) {
      return;
    }

    let current: Nullable<LinkedListNode<T>> = this.#head;

    while (current) {
      callback(current.getValue());

      current = current.getNext();
    }
  }

  traverseReverse(callback: (value: T) => void): void {
    if (!this.#head || !this.#tail) {
      return;
    }

    if (this.#head === this.#tail) {
      callback(this.#head.getValue());
      return;
    }

    let fromEnd: Nullable<LinkedListNode<T>> = this.#tail;

    while (fromEnd !== this.#head) {
      let fromBeginning: Nullable<LinkedListNode<T>> = this.#head;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      while (fromBeginning!.getNext() !== fromEnd) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fromBeginning = fromBeginning!.getNext();
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      callback(fromEnd!.getValue());

      fromEnd = fromBeginning;
    }

    callback(fromEnd.getValue());
  }

  toArray(): LinkedListNode<T>[] {
    const nodes: LinkedListNode<T>[] = [];

    let current = this.#head;

    while (current) {
      nodes.push(current);

      current = current.getNext();
    }

    return nodes;
  }

  toString(stringifyFunction?: (value: T) => string): string {
    return this.toArray().map(node => node.toString(stringifyFunction)).toString();
  }
}
