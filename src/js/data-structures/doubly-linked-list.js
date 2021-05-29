import {defaultEquals} from '../util.js';
import LinkedList from './linked-list.js';
import {DoublyNode} from './models/linked-list-models.js';

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  // adiciona um novo elemento ao final da lista
  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      // attach to the tail node
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  // adiciona um elemento numa posição específica
  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    const node = new DoublyNode(element);
    let current = this.head;

    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
    } else if (index === this.count) { // último item
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
      current.prev = node;
      node.prev = previous;
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
    let index = 0;

    while (current != null) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
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
      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(index);
      const previous = current.prev;

      // faz a ligação de previous com o next de current - pula esse elemento para removê-lo
      previous.next = current.next;
      current.next.prev = previous;
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
    super.clear();
    this.tail = undefined;
  }
}

export default DoublyLinkedList;
