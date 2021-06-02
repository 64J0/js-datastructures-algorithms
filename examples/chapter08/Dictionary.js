import Dictionary from '../../src/js/data-structures/dictionary.js';

const dictionary = new Dictionary();

dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.hasKey('Gandalf')); // true
console.log(dictionary.size()); // 3

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.remove('John');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());

dictionary.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}`, `value: ${v}`);
});
