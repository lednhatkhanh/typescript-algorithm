import { HashTable } from '../hash-table';

describe('HashTable', () => {
  test('should create with custom size', () => {
    const hashTable = new HashTable(20);
    expect(hashTable.buckets.length).toEqual(20);
  });

  test('should create with default size', () => {
    const hashTable = new HashTable();
    expect(hashTable.buckets.length).toEqual(32);
  });

  test('should set new key', () => {
    const hashTable = new HashTable();

    hashTable.set('a', 'abc');
    expect(hashTable.has('a')).toEqual(true);
    expect(hashTable.get('a')).toEqual('abc');

    hashTable.set('b', 'test test');
    expect(hashTable.has('b')).toEqual(true);
    expect(hashTable.get('b')).toEqual('test test');

    console.log(hashTable.buckets);
  });

  test('should update current key', () => {
    const hashTable = new HashTable();

    hashTable.set('a', 'abc');
    expect(hashTable.has('a')).toEqual(true);
    expect(hashTable.get('a')).toEqual('abc');

    hashTable.set('a', 'blue color');
    expect(hashTable.get('a')).toEqual('blue color');
  });

  test('should delete by key', () => {
    const hashTable = new HashTable();

    hashTable.set('a', 'abc');
    expect(hashTable.has('a')).toEqual(true);
    expect(hashTable.get('a')).toEqual('abc');

    expect(hashTable.delete('a')).toEqual(true);
    expect(hashTable.has('a')).toEqual(false);
    expect(hashTable.get('a')).toBeUndefined();

    expect(hashTable.delete('c')).toEqual(false);
  });

  test('should get all keys', () => {
    const hashTable = new HashTable();

    hashTable.set('1', 'new world');
    expect(hashTable.getKeys()).toEqual(['1']);

    hashTable.set('2', 'blue skye');
    expect(hashTable.getKeys()).toEqual(['1', '2']);
  });
});
