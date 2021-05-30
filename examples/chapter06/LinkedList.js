import LinkedList from '../../src/js/data-structures/linked-list.js';

const list = new LinkedList();

list.push(5);
list.push(10);

console.log('list.toString() => ', list.toString()); // 5,10

console.log('list.size() => ', list.size()); // 2

console.log('list.getHead() => ', list.getHead()); // Node { element: 5, next: Node { element: 10, next: undefined } }

console.log('list.remove(99) => ', list.remove(99)); // undefined

console.log('list.size() => ', list.size()); // 2

console.log('list.remove(99) => ', list.remove(10)); // undefined

list.push(1);
list.push(10);
list.push(100);

console.log('list.toString() => ', list.toString()); // 5,1,10,100
