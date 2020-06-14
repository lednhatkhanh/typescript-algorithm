import { ListNode } from './list-node';

type Comparator<T> = (a: T, b: T) => boolean;

export class LinkedList<T> {
  static fromArray<T>(arr: T[]): LinkedList<T> {
    return arr.reduce((list, item) => {
      list.append(item);
      return list;
    }, new LinkedList<T>());
  }

  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  comparator: Comparator<T>;

  constructor(comparator?: Comparator<T>) {
    this.head = null;
    this.tail = null;

    const defaultComparator = (a: T, b: T) => a === b;
    this.comparator = comparator ?? defaultComparator;
  }

  prepend(value: T): LinkedList<T> {
    if (this.head === null) {
      this.head = new ListNode(value);
      this.tail = this.head;
      return this;
    }

    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  append(value: T): LinkedList<T> {
    if (!this.head || !this.tail) {
      this.head = new ListNode(value);
      this.tail = this.head;
      return this;
    }

    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  find({
    value,
    callback,
  }: {
    value?: T;
    callback?: (value: T) => boolean;
  }): ListNode<T> | null {
    if (!this.head || !this.tail) {
      return null;
    }

    let node: ListNode<T> | null = this.head;
    while (node) {
      if (callback) {
        if (callback(node.value)) {
          return node;
        }
      } else if (
        typeof value !== 'undefined' &&
        this.comparator(node.value, value)
      ) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  delete(value: T): boolean {
    if (!this.head || !this.tail) {
      return false;
    }

    let result = false;
    let node: ListNode<T> | null = this.head;
    while (node && node.next) {
      if (this.comparator(node.next.value, value)) {
        node.next = node.next.next;
        result = true;
      } else {
        node = node.next;
      }
    }

    if (this.comparator(node.value, value)) {
      node = node.next;
      result = true;
    }

    if (this.comparator(this.head.value, value)) {
      this.head = this.head.next;
      result = true;
    }

    if (this.comparator(this.tail.value, value)) {
      this.tail = node;
      result = true;
    }

    return result;
  }

  deleteHead(): ListNode<T> | null {
    const deletedHead = this.head;
    this.head = this.head?.next ?? null;
    if (!this.head) {
      this.tail = null;
    }
    return deletedHead;
  }

  deleteTail(): ListNode<T> | null {
    if (!this.head) {
      return null;
    }

    const deletedTail = this.tail;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let node: ListNode<T> | null = this.head;
    while (node && node.next && node.next.next) {
      node = node.next;
    }
    if (node) {
      node.next = node.next?.next ?? null;
    }
    this.tail = node;
    return deletedTail;
  }

  // 2 -> 3 -> 4 -> 5 -> 6 -> null
  // null 2 -> 3 -> 4 -> 5 -> 6 (current node is 2, store 3, point 2 to null)
  // null <- 2 3 -> 4 -> 5 -> 6 (current node is 3, store 4, point 3 to 2)
  // null <- 2 <- 3 4 -> 5 -> 6 (...)
  // null <- 2 <- 3 <- 4 5 -> 6 (...)
  // null <- 2 <- 3 <- 4 <- 5 6 (...)
  // null <- 2 <- 3 <- 4 <- 5 <- 6 (...)
  // 6 -> 5 -> 4 -> 3 -> 2 -> null (swap head and tail)
  reverse(): LinkedList<T> {
    let currentNode: ListNode<T> | null = this.head;
    let previousNode: ListNode<T> | null = null;

    while (currentNode) {
      const nextNode = currentNode.next;

      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }

  toArray(): T[] {
    const valueArr: T[] = [];
    let node = this.head;
    while (node) {
      valueArr.push(node.value);
      node = node.next;
    }
    return valueArr;
  }

  toString(
    parseStringFn: (value: T) => string = (value: T) =>
      `${(value as unknown) as string}`,
  ): string {
    return this.toArray().map(parseStringFn).join(', ');
  }
}
