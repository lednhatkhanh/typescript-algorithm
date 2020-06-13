import { ListNode } from '../utils';

export function rearrangeLastN(
  l: ListNode<number> | null,
  n: number,
): ListNode<number> | null {
  if (!n) {
    return l;
  }

  if (!l) {
    return null;
  }

  let current: ListNode<number> | null = l;
  const nodesByIndexes: { [key: string]: ListNode<number> } = {};
  let i = 0;

  while (current) {
    nodesByIndexes[`${i}`] = current;
    current = current.next;
    i += 1;
  }

  const length = Object.keys(nodesByIndexes).length;
  if (n === length) {
    return l;
  }

  const startIndex = length - n;
  const head = nodesByIndexes[`${startIndex}`];

  const tail = nodesByIndexes[`${startIndex - 1}`];
  tail.next = null;

  // Connect the list
  nodesByIndexes[`${length - 1}`].next = nodesByIndexes[`${0}`];
  return head;
}
