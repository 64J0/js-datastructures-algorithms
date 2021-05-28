import Queue from '../../src/js/data-structures/queue.js';

// fila circular
function hotPotato(elementList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  // adiciona elementos no array
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // remove e adiciona uma pessoa na lista recorrentemente
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is ${result.winner}`);
