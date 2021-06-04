import HashTable from '../../src/js/data-structures/hash-table.js';

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'john@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.hashCode('Gandalf') + ' - Gandalf'); // 19
console.log(hash.hashCode('John') + ' - John'); // 29
console.log(hash.hashCode('Tyrion') + ' - Tyrion'); // 16

console.log(hash.get('Gandalf')); // gandalf@email.com
console.log(hash.get('Loiane')); // undefined

hash.remove('Gandalf');

console.log(hash.get('Gandalf')); // undefined
console.log(hash.toString());
