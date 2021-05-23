const _items = Symbol('stackItems'); // imutável

// pilha = LIFO -> Last In First Out
class StackArray {
  constructor() {
    this[_items] = [];
  }

  /**
   * @description Adiciona um novo elemento (ou vários elementos) no topo da pilha.
   */
  push(element) {
    this[_items].push(element);
  }

  /**
   * @description Remove o elemento que está no topo da pilha.
   * Também devolve o elemento removido.
   */
  pop() {
    return this[_items].pop();
  }

  /**
   * @description Devolve o elemento que está no topo da pilha.
   * A pilha não é modificada (o elemento não é removido; ele é devolvido apenas como
   * informação).
   */
  peek() {
    return this[_items][this[_items].length - 1];
  }

  /**
   * @description Devolve true se a pilha não contiver nenhum elemento e false se o
   * tamanho da pilha for maior que 0.
   */
  isEmpty() {
    return this[_items].length === 0;
  }

  /**
   * @description Remove todos os elementos da pilha.
   */
  clear() {
    this[_items] = [];
  }

  /**
   * @description Devolve o número de elementos contidos na pilha.
   * É semelhante à propriedade length de um array.
   */
  size() {
    return this[_items].length;
  }
}

export default StackArray;
