import { ListNode } from '../utils';

/**
 * Traverse linked list using two pointers.
 * Move one pointer by one and other pointer by two.
 * When the fast pointer reaches end slow pointer will reach middle of the linked list.
 */
export function findMiddleNode(l: ListNode<number> | null): number | null {
  if (!l) {
    return null;
  }

  let slowPointer: ListNode<number> | null = l;
  let fastPointer: ListNode<number> | null = l;

  while (fastPointer?.next?.next) {
    fastPointer = fastPointer.next.next;
    if (slowPointer.next) {
      slowPointer = slowPointer.next;
    }
  }

  // The number of nodes are even, move the slow pointer next one node
  if (fastPointer.next && slowPointer.next) {
    return slowPointer.next.value;
  }

  return slowPointer?.value;
}
