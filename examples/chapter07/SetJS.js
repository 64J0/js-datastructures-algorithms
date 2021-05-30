const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);

const set2 = new Set();
set2.add(3);
set2.add(4);
set2.add(5);

// UNION
console.log(new Set([...set1, ...set2])); // { 1, 2, 3, 4, 5 }

// INTERSECTION
console.log(new Set([...set1].filter((x) => set2.has(x)))); // { 3 }

// DIFFERENCE
console.log(new Set([...set1].filter((x) => !set2.has(x)))); // { 1, 2 }
console.log(new Set([...set2].filter((x) => !set1.has(x)))); // { 4, 5 }
