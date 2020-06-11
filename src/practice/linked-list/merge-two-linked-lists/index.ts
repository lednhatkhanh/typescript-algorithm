import { ListNode } from '../utils';

type NullableNode = ListNode<number> | null;

export function mergeTwoLinkedLists(
  l1: NullableNode,
  l2: NullableNode,
): NullableNode {
  let newListHead: NullableNode = null;
  let newListCurrentNode: NullableNode = null;

  let currentL1: NullableNode = l1;
  let currentL2: NullableNode = l2;

  while (currentL1 || currentL2) {
    const l1Value = currentL1?.value ?? Infinity;
    const l2Value = currentL2?.value ?? Infinity;
    const lower = l1Value < l2Value ? 'l1' : 'l2';

    const newNode = new ListNode(lower === 'l1' ? l1Value : l2Value);
    if (!newListHead || !newListCurrentNode) {
      newListHead = newNode;
      newListCurrentNode = newListHead;
    } else {
      newListCurrentNode.next = newNode;
      newListCurrentNode = newNode;
    }

    if (lower === 'l1' && currentL1) {
      currentL1 = currentL1?.next;
    } else if (currentL2) {
      currentL2 = currentL2?.next;
    }
  }

  return newListHead;
}
