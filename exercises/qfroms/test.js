const Queue = require('./index');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
    q.remove();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(undefined);
});

test('Order of elements is maintained2', () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    q.add(4);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    q.add(5);
    expect(q.remove()).toEqual(4);
    q.add(6)
    expect(q.remove()).toEqual(5);
    expect(q.remove()).toEqual(6);
    q.add(7)
    q.add(9)
    expect(q.remove()).toEqual(7);
    q.add(19)
    expect(q.remove()).toEqual(9);
    expect(q.remove()).toEqual(19);
    expect(q.remove()).toEqual(undefined);
});

test('peek returns, but does not remove, the first value', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  expect(q.peek()).toEqual(1);
  expect(q.peek()).toEqual(1);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
});
