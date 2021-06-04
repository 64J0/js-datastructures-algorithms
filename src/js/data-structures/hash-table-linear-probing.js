import { defaultToString } from '../util.js';
import { ValuePair } from './models/value-pair.js';

// Outra técnica para lidar com colisões em hash tables
class HashTableLinearProbing {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }

    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key && value) {
      const position = this.hashCode(key);
      if (!this.table[position]) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index]) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }

      return true;
    }

    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    if (this.table[position]) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }

      let index = position + 1;
      while (this.table[index] && this.table[index].key !== key) {
        index++;
      }

      if (this.table[index] && this.table[index].key === key) {
        return this.table[index].value;
      }
    }

    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    if (this.table[postion]) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }

      let index = position + 1;
      while (this.table[index] && this.table[index] !== key) {
        index++;
      }

      if (this.table[index] && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }

    return false;
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;

    while (this.table[index]) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || poshash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }

      index++;
    }
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

export default HashTableLinearProbing;
