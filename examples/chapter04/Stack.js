// import Stack from '../../src/js/data-structures/stack-array.js';
// import Stack from '../../src/js/data-structures/stack.js';
// import Stack from '../../src/js/data-structures/stack-symbol.js';
import Stack from '../../src/js/data-structures/stack-weak-map.js';

const stack = new Stack();

console.log('stack.isEmpty() => ', stack.isEmpty()); // true

stack.push(5); // [5]
stack.push(8); // [5, 8]

console.log('stack.peek() => ', stack.peek()); // 8

stack.push(11); // [5, 8, 11]

console.log('stack.size() => ', stack.size()); // 3

console.log('stack.isEmpty() => ', stack.isEmpty()); // false

stack.push(15); // [5, 8, 11, 15]

stack.pop(); // [5, 8, 11]
stack.pop(); // [5, 8]

console.log('stack.size() => ', stack.size()); // 2
