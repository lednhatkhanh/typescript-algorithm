export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let headNode = null;
  let currentNode;
  let left = 0;

  while (l1 !== null || l2 !== null) {
    const total = (l1?.val ?? 0) + (l2?.val ?? 0) + left;
    const newNode = new ListNode(total >= 10 ? total - 10 : total);
    left = total >= 10 ? 1 : 0;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    if (headNode && currentNode) {
      currentNode.next = newNode;
      currentNode = newNode;
    } else {
      headNode = newNode;
      currentNode = headNode;
    }
  }

  if (left > 0 && currentNode) {
    const newNode = new ListNode(left);
    currentNode.next = newNode;
  }

  return headNode;
}
