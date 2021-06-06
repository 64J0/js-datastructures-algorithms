import BinarySearchTree from '../../src/js/data-structures/binary-search-tree.js';

const tree = new BinarySearchTree();

tree.insert(11); // root
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

const printNode = (value) => console.log(value);

console.log('In Order:');
tree.inOrderTraverse(printNode);
/*
3
5
7
8
9
10
11
12
13
14
15
18
20
25
*/

console.log('Pre Order:');
tree.preOrderTraverse(printNode);
/*
11
7
5
3
9
8
10
15
13
12
14
20
18
25
*/

console.log('Post Order:');
tree.postOrderTraverse(printNode);
/*
3
5
8
10
9
7
12
14
13
18
25
20
15
11
*/

console.log(`Valor mínimo: ${tree.min()}`);
console.log(`Valor máximo: ${tree.max()}`);

console.log(`Tem o valor 10? ${tree.search(10)}`);
console.log(`Tem o valor 78? ${tree.search(78)}`);
