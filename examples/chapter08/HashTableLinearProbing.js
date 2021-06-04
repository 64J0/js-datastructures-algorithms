import HashTableLinearProbing from '../../src/js/data-structures/hash-table-linear-probing.js';

const hash = new HashTableLinearProbing();

hash.put('Ygritte', 'Ygritte@email.com');
hash.put('Jonathan', 'Jonathan@email.com');
hash.put('Jamie', 'Jamie@email.com');
hash.put('Jack', 'Jack@email.com');
hash.put('Jasmine', 'Jasmine@email.com');
hash.put('Jake', 'Jake@email.com');
hash.put('Nathan', 'Nathan@email.com');
hash.put('Athelstan', 'Athelstan@email.com');
hash.put('Sue', 'Sue@email.com');
hash.put('Aethelwulf', 'Aethelwulf@email.com');
hash.put('Sargeras', 'Sargeras@email.com');

console.log(hash.get('Sargeras'));
