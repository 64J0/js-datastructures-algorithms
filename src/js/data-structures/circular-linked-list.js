import { defaultEquals } from '../util.js';
import LinkedList from './linked-list.js';
import { Node } from './models/linked-list-models.js';

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    const node = new Node(element);
    let current = this.head;

    if (index === 0) {
      if (!this.head) {
        this.head = node;
        node.next = this.head;
      } else {
        node.next = current;
        current = this.getElementAt(this.size());
        // atualiza o último elemento
        this.head = node;
        current.next = this.head;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      node.next = previous.next;
      previous.next = node;
    }

    this.count++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index > this.count) {
      return undefined;
    }

    let current = this.head;

    if (index === 0) {
      if (this.size() === 1) {
        this.head = undefined;
      } else {
        const removed = this.head;
        current = this.getElementAt(this.size());
        this.head = this.head.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      current = previou.next;
      previous.next = current.next;
    }

    this.count--;
    return current.element;
  }
}

export default CircularLinkedList;
