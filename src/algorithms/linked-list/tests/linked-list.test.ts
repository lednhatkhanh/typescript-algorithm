import { LinkedList } from '../linked-list';

describe('LinkedList', () => {
  test('should init an empty list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test('should init a list from an array', () => {
    const list = LinkedList.fromArray([5, 6, 7, 8, 9]);

    expect(list.head?.value).toEqual(5);
    expect(list.tail?.value).toEqual(9);
    expect(list.toString()).toEqual('5, 6, 7, 8, 9');
  });

  describe('append()', () => {
    test('should append a node to the end of list', () => {
      const list = new LinkedList<number>();
      list.append(5).append(6).append(7).append(8);

      expect(list.head?.value).toEqual(5);
      expect(list.tail?.value).toEqual(8);
      expect(list.toString()).toEqual('5, 6, 7, 8');
    });
  });

  describe('prepend()', () => {
    test('should prepend a node to the beginning of list', () => {
      const list = new LinkedList<number>();
      list.prepend(5).prepend(6).prepend(7).prepend(8);

      expect(list.head?.value).toEqual(8);
      expect(list.tail?.value).toEqual(5);
      expect(list.toString()).toEqual('8, 7, 6, 5');
    });
  });

  describe('find()', () => {
    test('should return found node', () => {
      const list = LinkedList.fromArray([5, 6, 7, 8]);

      expect(list.find({ value: 7 })?.value).toEqual(7);
      expect(list.find({ value: 7 })?.next?.value).toEqual(8);
    });

    test('should return null if node not found', () => {
      const list = LinkedList.fromArray([4, 3, 2, 1]);

      expect(list.find({ value: 0 })).toBeNull();
    });
  });

  describe('delete()', () => {
    test('should delete nodes', () => {
      const list = LinkedList.fromArray([4, 5, 6, 4, 8]);

      expect(list.delete(4)).toEqual(true);
      expect(list.toString()).toEqual('5, 6, 8');
      expect(list.head?.value).toEqual(5);
      expect(list.tail?.value).toEqual(8);
    });

    test('should delete nodes', () => {
      const list = LinkedList.fromArray([2, 2, 2]);

      expect(list.delete(2)).toEqual(true);
      expect(list.toString()).toEqual('');
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });

    test('should return false if node not found', () => {
      const list = LinkedList.fromArray([2, 3, 4]);

      expect(list.delete(5)).toEqual(false);
      expect(list.toString()).toEqual('2, 3, 4');
      expect(list.head?.value).toEqual(2);
      expect(list.tail?.value).toEqual(4);
    });

    test('should delete head and tail nodes', () => {
      const list = LinkedList.fromArray([2, 3, 5, 4, 2]);

      expect(list.delete(2)).toEqual(true);
      expect(list.toString()).toEqual('3, 5, 4');
      expect(list.head?.value).toEqual(3);
      expect(list.tail?.value).toEqual(4);
    });
  });

  describe('deleteHead()', () => {
    test('should delete head', () => {
      const list = LinkedList.fromArray([2, 3, 4]);

      expect(list.toString()).toEqual('2, 3, 4');
      expect(list.head?.value).toEqual(2);

      expect(list.deleteHead()?.value).toEqual(2);
      expect(list.toString()).toEqual('3, 4');
      expect(list.head?.value).toEqual(3);

      expect(list.deleteHead()?.value).toEqual(3);
      expect(list.toString()).toEqual('4');
      expect(list.head?.value).toEqual(4);

      expect(list.deleteHead()?.value).toEqual(4);
      expect(list.toString()).toEqual('');
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();

      expect(list.deleteHead()).toBeNull();
      expect(list.toString()).toEqual('');
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });

  describe('deleteTail()', () => {
    test('should delete tail', () => {
      const list = LinkedList.fromArray([2, 3, 4, 6]);

      expect(list.deleteTail()?.value).toEqual(6);
      expect(list.toString()).toEqual('2, 3, 4');
      expect(list.tail?.value).toEqual(4);
      expect(list.head?.value).toEqual(2);

      expect(list.deleteTail()?.value).toEqual(4);
      expect(list.toString()).toEqual('2, 3');
      expect(list.tail?.value).toEqual(3);
      expect(list.head?.value).toEqual(2);

      expect(list.deleteTail()?.value).toEqual(3);
      expect(list.toString()).toEqual('2');
      expect(list.tail?.value).toEqual(2);
      expect(list.head?.value).toEqual(2);

      expect(list.deleteTail()?.value).toEqual(2);
      expect(list.toString()).toEqual('');
      expect(list.tail).toBeNull();
      expect(list.head).toBeNull();

      expect(list.deleteTail()).toBeNull();
      expect(list.toString()).toEqual('');
      expect(list.tail).toBeNull();
      expect(list.head).toBeNull();
    });
  });

  describe('reverse()', () => {
    test('should reverse list', () => {
      const list = LinkedList.fromArray([2, 3, 4, 6]);

      expect(list.reverse().toString()).toEqual('6, 4, 3, 2');
      expect(list.head?.value).toEqual(6);
      expect(list.tail?.value).toEqual(2);
    });

    test('should reverse list', () => {
      const list = LinkedList.fromArray([]);

      expect(list.reverse().toString()).toEqual('');
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });
});
