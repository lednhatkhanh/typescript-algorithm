import { ListNode } from '../list-node';

describe('ListNode', () => {
  test('should init a node with value', () => {
    const node = new ListNode(4);
    expect(node.value).toEqual(4);
    expect(node.next).toEqual(null);
  });

  test('should set node value', () => {
    const node = new ListNode(5);
    node.value = 5;
    expect(node.value).toEqual(5);
  });

  test('should set next node', () => {
    const node = new ListNode(6);
    const nextNode = new ListNode(3);
    node.next = nextNode;

    expect(node.next).toEqual(nextNode);
  });
});
