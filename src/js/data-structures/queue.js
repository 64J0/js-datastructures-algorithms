// Fila (FIFO)
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // adiciona um elemento ao final da fila
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // remove o primeiro elemento da fila e devolve este elemento removido
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // devolve o primeiro elemento da fila
  // é o primeiro elemento armazenado e o primeiro a ser removido
  // o elemento não é removido, é apenas retornado como informação
  // chamado de front em algumas linguagens
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount]; // próximo item na fila
  }

  // retorna true caso a fila esteja vazia ou false no caso contrário
  isEmpty() {
    return this.size() === 0;
  }

  // devolve o número de elementos contidos na fila
  // semelhante ao length de um array
  size() {
    return this.count - this.lowestCount;
  }

  // limpar a fila
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}

export default Queue;
