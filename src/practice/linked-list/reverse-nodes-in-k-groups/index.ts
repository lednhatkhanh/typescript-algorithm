import { ListNode } from '../utils';

type NullableListNode = ListNode<number> | null;

// TODO: Keep learning this
export function reverseNodesInKGroups(
  l: NullableListNode,
  k: number,
): NullableListNode {
  let list: NullableListNode = null;
  let last: NullableListNode = null;
  let prevlast: NullableListNode = null;
  let i = 0;
  let prev: NullableListNode = null;

  // k == 1 same list, no changes.
  if (k == 1) return l;

  while (l) {
    last = l;
    prev = null;

    // revert the first group
    for (; l && i < k; i++) {
      const savedNext: NullableListNode = l.next;
      l.next = prev;
      prev = l;
      l = savedNext;
    }

    // set first node or if not first, link the first node of the group
    // to the previous group last node.
    if (!list) {
      list = prev;
    } else {
      if (prevlast) {
        prevlast.next = prev;
      }
    }

    if (i == k) {
      // if group complete go to next
      prevlast = last;
      i = 0;
    } else {
      // if last group not complete, revert again and set i to k - i
      // to get "complete" status (avoid infinite loop) after revert-revert,
      // set i start value to k - i.
      i = k - i;
      l = prev;
    }
  }

  return list;
}
