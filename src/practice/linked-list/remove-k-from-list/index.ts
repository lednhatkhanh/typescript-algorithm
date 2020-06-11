import { ListNode } from '../utils';

// export class ListNode<T> {
//   value: T;
//   next: ListNode<T> | null;
//   constructor(value: T) {
//     this.value = value;
//     this.next = null;
//   }
// }

export function removeKFromList(
  l: ListNode<number> | null,
  k: number,
): ListNode<number> | null {
  let node = l;
  while (node && node.next) {
    if (node.next.value === k) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  if (l && l.value === k) {
    l = l.next;
  }
  return l;
}
