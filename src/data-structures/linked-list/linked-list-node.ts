export class LinkedListNode<T> {
  #value: T;
  #next: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.#value = value;
    this.#next = next;
  }

  getNext(): LinkedListNode<T> | null {
    return this.#next;
  }

  setNext(next: LinkedListNode<T> | null): void {
    this.#next = next;
  }

  getValue(): T {
    return this.#value;
  }

  setValue(value: T): void {
    this.#value = value;
  }

  toString(stringifyFunction?: (value: T) => string): string {
    return stringifyFunction ? stringifyFunction(this.#value) : `${this.#value}`;
  }
}
