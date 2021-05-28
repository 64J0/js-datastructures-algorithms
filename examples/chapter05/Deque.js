import Deque from '../../src/js/data-structures/deque.js';

const deque = new Deque();

console.log('deque.isEmpty() => ', deque.isEmpty()); // true

deque.addBack('John');
deque.addBack('Jack');

console.log('deque.toString() => ', deque.toString()); // John.Jack

deque.addBack('Camila');

console.log('deque.toString() => ', deque.toString()); // John.Jack,Camila

console.log('deque.size() => ', deque.size()); // 3

console.log('deque.isEmpty() => ', deque.isEmpty()); // false

console.log('deque.removeFront() => ', deque.removeFront()); // remove John

console.log('deque.toString() => ', deque.toString()); // Jack,Camila

console.log('deque.removeFront() => ', deque.removeBack()); // remove Camila

console.log('deque.toString() => ', deque.toString()); // Jack

deque.addFront('John');

console.log('deque.toString() => ', deque.toString()); // John,Jack
