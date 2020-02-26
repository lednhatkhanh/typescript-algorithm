import { LinkedList } from '../linked-list';

describe('LinkedList', () => {
  test('should create default linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.getHead()).toEqual(null);
    expect(linkedList.getTail()).toEqual(null);

    expect(linkedList.toArray()).toEqual([]);
    expect(linkedList.toString()).toEqual('');
  });

  test('should create a linked list from an array', () => {
    const arr = [2, 3, 4, 5, 6];

    expect(LinkedList.fromArray(arr).toString()).toEqual('2,3,4,5,6');
  });

  test('should append node', () => {
    const linkedList = new LinkedList<number>();

    linkedList
      .append(1)
      .append(2)
      .append(3)
      .append(4);

    expect(linkedList.toString()).toEqual('1,2,3,4');
    expect(linkedList.getTail()?.getNext()).toEqual(null);
  });

  test('should prepend node', () => {
    const linkedList = new LinkedList<string>();

    linkedList
      .prepend('A')
      .prepend('B')
      .prepend('C');
    expect(linkedList.toString()).toEqual('C,B,A');
  });

  test('should search for value', () => {
    const linkedList = LinkedList.fromArray([1, 2, 3, 4, 5, 6]);

    expect(linkedList.search(4)).toEqual(true);
    expect(linkedList.search(7)).toEqual(false);
  });

  test('should delete node', () => {
    let linkedList = new LinkedList();

    expect(linkedList.delete(10)).toEqual(false);
    expect(linkedList.getHead()).toEqual(null);
    expect(linkedList.getTail()).toEqual(null);

    linkedList = LinkedList.fromArray([1, 2, 3, 4, 5]);

    expect(linkedList.delete(6)).toEqual(false);

    expect(linkedList.delete(5)).toEqual(true);
    expect(linkedList.toString()).toEqual('1,2,3,4');
    expect(linkedList.getHead()?.getValue()).toEqual(1);
    expect(linkedList.getTail()?.getValue()).toEqual(4);

    expect(linkedList.delete(3)).toEqual(true);
    expect(linkedList.toString()).toEqual('1,2,4');
    expect(linkedList.getHead()?.getValue()).toEqual(1);
    expect(linkedList.getTail()?.getValue()).toEqual(4);

    expect(linkedList.delete(1)).toEqual(true);
    expect(linkedList.toString()).toEqual('2,4');
    expect(linkedList.getHead()?.getValue()).toEqual(2);
    expect(linkedList.getTail()?.getValue()).toEqual(4);

    expect(linkedList.delete(2)).toEqual(true);
    expect(linkedList.toString()).toEqual('4');
    expect(linkedList.getHead()?.getValue()).toEqual(4);
    expect(linkedList.getTail()?.getValue()).toEqual(4);

    expect(linkedList.delete(4)).toEqual(true);
    expect(linkedList.toString()).toEqual('');
    expect(linkedList.getHead()).toEqual(null);
    expect(linkedList.getTail()).toEqual(null);
  });

  test('should traverse with empty list', () => {
    const callback = jest.fn();
    const linkedList = new LinkedList();

    linkedList.traverse(callback);

    expect(callback).toBeCalledTimes(0);
  });

  test('should call callback while traversing', () => {
    const callback = jest.fn();
    const arr = [2, 4, 6, 8, 10];
    const linkedList = LinkedList.fromArray(arr);

    linkedList.traverse(callback);

    expect(callback).toBeCalledTimes(5);
    expect(callback.mock.calls[0][0]).toEqual(2);
    expect(callback.mock.calls[1][0]).toEqual(4);
    expect(callback.mock.calls[2][0]).toEqual(6);
    expect(callback.mock.calls[3][0]).toEqual(8);
    expect(callback.mock.calls[4][0]).toEqual(10);
  });

  test('should traverse reversely with empty list', () => {
    const callback = jest.fn();
    const linkedList = new LinkedList();

    linkedList.traverseReverse(callback);

    expect(callback).toBeCalledTimes(0);
  });

  test('should traverse reversely', () => {
    const callback = jest.fn();
    const arr = [2, 4, 6, 8, 10];
    const linkedList = LinkedList.fromArray(arr);

    linkedList.traverseReverse(callback);

    expect(callback).toBeCalledTimes(5);
    expect(callback.mock.calls[0][0]).toEqual(10);
    expect(callback.mock.calls[1][0]).toEqual(8);
    expect(callback.mock.calls[2][0]).toEqual(6);
    expect(callback.mock.calls[3][0]).toEqual(4);
    expect(callback.mock.calls[4][0]).toEqual(2);
  });
});
