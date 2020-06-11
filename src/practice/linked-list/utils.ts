export class ListNode<T> {
  static fromArray<T>(arr: T[]): ListNode<T> | null {
    let root: ListNode<T> | null = null;
    let node: ListNode<T> | null = null;

    arr.forEach((item) => {
      if (!root || !node) {
        root = new ListNode(item);
        node = root;
        return;
      }

      const newNode = new ListNode(item);
      node.next = newNode;
      node = newNode;
    });

    return root;
  }

  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
