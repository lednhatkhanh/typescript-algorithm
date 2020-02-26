import { LinkedListNode } from '../linked-list-node';

describe('LinkedListNode', () => {
  test('should create single node with constructor', () => {
    const nodeValue = 3;
    const node = new LinkedListNode(nodeValue);

    expect(node.getValue()).toEqual(nodeValue);
    expect(node.getNext()).toEqual(null);
  });

  test('should be able to set value', () => {
    const nodeValue = 3;
    const node = new LinkedListNode(2);

    node.setValue(3);

    expect(node.getValue()).toEqual(nodeValue);
  });

  test('should create linked node with constructor', () => {
    const firstNodeValue = 'A';
    const secondNodeValue = 'B';

    const secondNode = new LinkedListNode(secondNodeValue);
    const firstNode = new LinkedListNode(firstNodeValue, secondNode);

    expect(firstNode.getNext()).toEqual(secondNode);
    expect(firstNode.getNext()?.getValue()).toEqual(secondNodeValue);
    expect(firstNode.getNext()?.getNext()).toEqual(null);
  });

  test('should be able to link nodes', () => {
    const firstNodeValue = 'C';
    const secondNodeValue = 'D';

    const firstNode = new LinkedListNode(firstNodeValue);
    const secondNode = new LinkedListNode(secondNodeValue);

    firstNode.setNext(secondNode);

    expect(firstNode.getNext()).toEqual(secondNode);
    expect(firstNode.getNext()?.getValue()).toEqual(secondNodeValue);
    expect(firstNode.getNext()?.getNext()).toEqual(null);
  });

  test('should return string with toString', () => {
    const nodeValue = 'ABCDD';

    const node = new LinkedListNode(nodeValue);

    expect(node.toString()).toEqual(nodeValue);
  });

  test('should run custom stringify function with toString', () => {
    const nodeValue = { a: 5, b: 7 };

    const node = new LinkedListNode(nodeValue);

    const customStringifyObj = {
      stringify(value: { a: number; b: number }): string {
        return `${value.a + value.b}`;
      },
    };

    const spiedFn = jest.spyOn(customStringifyObj, 'stringify');

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(node.toString(customStringifyObj.stringify)).toEqual('12');
    expect(spiedFn).toBeCalledTimes(1);
    expect(spiedFn).toBeCalledWith(nodeValue);
  });
});
