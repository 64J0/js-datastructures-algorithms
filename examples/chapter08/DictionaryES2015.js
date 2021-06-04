const map = new Map();

map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');

console.log(map.has('Gandalf')); // true
console.log(map.size); // 3

console.log(map.keys());
console.log(map.values());
console.log(map.get('Tyrion'));

map.delete('John');

console.log(map.keys());
console.log(map.values());

map.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}`, `value: ${v}`);
});
