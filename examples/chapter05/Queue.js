import Queue from '../../src/js/data-structures/queue.js';

const queue = new Queue();

console.log('queue.isEmpty() => ', queue.isEmpty()); // true

queue.enqueue('John');
queue.enqueue('Jack');

console.log('queue.toString() => ', queue.toString()); // John,Jack

queue.enqueue('Camila');

console.log('queue.toString() => ', queue.toString()); // John,Jack,Camila

console.log('queue.size() => ', queue.size()); // 3

queue.dequeue();
queue.dequeue();

console.log('queue.peek() => ', queue.peek()); // Camila
