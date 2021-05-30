import Set from '../../src/js/data-structures/set.js';

const set1 = new Set();

set1.add(5);
set1.add(10);

console.log('set1.values() => ', set1.values()); // [5, 10]
console.log('set1.has(5) => ', set1.has(5)); // true
console.log('set1.has(54) => ', set1.has(54)); // false
console.log('set1.size() => ', set1.size()); // 2

set1.delete(5);

console.log('set1.values() => ', set1.values()); // [10]

set1.add(5);

// UNION

const set2 = new Set();

set2.add(5);
set2.add(3);
set2.add(13);

const union12 = set1.union(set2);
console.log('union12.values() => ', union12.values()); // [ 3, 5, 10, 13 ]

// INTERSECTION

const intersection12 = set1.intersection(set2);
console.log('intersection12.values() => ', intersection12.values()); // [5]

const intersectionOpt12 = set1.intersectionOptimized(set2);
console.log('intersectionOpt12.values() => ', intersectionOpt12.values()); // [5]

// DIFFERENCE

const difference12 = set1.difference(set2);
console.log('difference12.values() => ', difference12.values()); // [ 10 ]

const difference21 = set2.difference(set1);
console.log('difference21.values() => ', difference21.values()); // [ 3, 13 ]

// SUBSET
