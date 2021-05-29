import {defaultEquals} from '../util.js';
import {Node} from './models/linked-list-models.js';

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // quantidade de elementos da lista
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  getHead() {
    return this.head;
  }

  // adiciona um novo elemento ao final da lista
  push(element) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) { // obtém o último item
        current = current.next;
      }

      // e atribui o novo elemento a next para criar a ligação
      current.next = node;
    }

    this.count++;
  }

  // adiciona um elemento numa posição específica
  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    const node = new Node(element);

    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      node.next = current;
      previous.next = node;
    }

    this.count++;
    return true;
  }

  // devolve um elemento numa posição específica
  getElementAt(index) {
    if (index < 0 || index > this.count) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < index && node; i++) {
      current = current.next;
    }

    return current;
  }

  // remove um elemento da lista
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // devolve o índice de um elemento na lista
  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  // remove um item de uma posição específica da lista
  removeAt(index) {
    // verifica valores fora do intevalo
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let current = this.head;

    // remove o primeiro item
    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;

      // faz a ligação de previous com o next de current:
      // pula esse elemento para removê-lo
      previous.next = current.next;
    }

    this.count--;
    return current.element;
  }

  // devolve true se a lista ligada não contiver nenhum elemento e false
  // se o tamanho da lista for maior que 0
  isEmpty() {
    return this.count === 0;
  }

  // devolve o número de elementos da lista
  size() {
    return this.count;
  }

  // devolve uma representação em string da lista ligada
  toString() {
    if (!this.head) {
      return '';
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 1; i < this.size() && current; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    return objString;
  }

  clear() {
    this.count = 0; // quantidade de elementos da lista
    this.head = undefined;
  }
}

export default LinkedList;
