import { Compare, defaultCompare, defaultEquals } from '../util.js';
import LinkedList from './linked-list.js';

class SortedLikedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  // a posição onde element será inserido é controlada internamente
  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }

    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;

    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);

      if (comp === Compare.LESS_THAN) {
        return i;
      }

      current = current.next;
    }

    return i;
  }
}

export default SortedLikedList;
