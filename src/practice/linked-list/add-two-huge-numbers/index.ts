import { ListNode } from '../utils';

export function addTwoHugeNumbers(
  a: ListNode<number>,
  b: ListNode<number>,
): ListNode<number> | null {
  const reversedA = reverse(a);
  const reversedB = reverse(b);

  let nodeA: ListNode<number> | null = reversedA;
  let nodeB: ListNode<number> | null = reversedB;

  let sumHead: ListNode<number> | null = null;
  let sumNode: ListNode<number> | null = null;

  let left = 0;

  while (nodeA || nodeB || left) {
    let total = (nodeA?.value ?? 0) + (nodeB?.value ?? 0) + left;

    if (total > 9999) {
      left = 1;
      total -= 10_000;
    } else {
      left = 0;
    }

    const newNode = new ListNode(total);
    if (!sumHead) {
      sumHead = newNode;
      sumNode = sumHead;
    } else if (sumNode) {
      sumNode.next = newNode;
      sumNode = newNode;
    }
    nodeA = nodeA?.next ?? null;
    nodeB = nodeB?.next ?? null;
  }

  if (!sumHead) {
    return new ListNode(0);
  }

  return reverse(sumHead);
}

function reverse(l: ListNode<number>) {
  let currentNode: ListNode<number> | null = l;
  let previousNode: ListNode<number> | null = null;
  let nextNode: ListNode<number> | null = null;

  while (currentNode) {
    nextNode = currentNode.next;

    currentNode.next = previousNode;

    previousNode = currentNode;
    currentNode = nextNode;
  }

  if (previousNode) {
    l = previousNode;
  }
  return l;
}
