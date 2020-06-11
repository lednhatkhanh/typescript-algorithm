import { ListNode } from '../utils';

export function isListPalindrome(l: ListNode<number> | null): boolean {
  if (!l) {
    return true;
  }

  let fastPointer: ListNode<number> | null = l;
  let slowPointer: ListNode<number> | null = l;
  let previousOfSlowPointer: ListNode<number> | null = null;

  while (fastPointer.next?.next) {
    fastPointer = fastPointer?.next.next;
    if (slowPointer.next) {
      slowPointer = slowPointer?.next;
    }
  }

  if (fastPointer.next) {
    previousOfSlowPointer = slowPointer;
    slowPointer = slowPointer.next;
  }

  // Cut the first half
  if (previousOfSlowPointer) {
    previousOfSlowPointer.next = null;
  }

  return compare(reverse(slowPointer), l);
}

function reverse(l: ListNode<number> | null): ListNode<number> | null {
  let currentNode: ListNode<number> | null = l;
  let previousNode: ListNode<number> | null = null;
  let nextNode: ListNode<number> | null = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;

    currentNode = nextNode;
  }

  l = previousNode;
  return l;
}

function compare(
  l: ListNode<number> | null,
  l1: ListNode<number> | null,
): boolean {
  let node = l;
  let node1 = l1;

  while (node && node1) {
    if (node.value !== node1.value) {
      return false;
    }

    node = node.next;
    node1 = node1.next;
  }

  if (!node1 && !node) {
    return true;
  }

  return false;
}
