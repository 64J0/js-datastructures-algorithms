import { defaultToString } from '../util.js';
import { ValuePair } from './models/value-pair.js';

class HashTable {
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

  // outra função de hash alternatia
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }

    return hash % 1023;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key && value) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];

    if (valuePair) {
      delete this.table[hash];
      return true;
    }

    return false;
  }

  get(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    return valuePair ? valuePair.value : undefined;
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const keys = Object.keys(this.table);
    let objString = '';
    for (const key of keys) {
      objString += `{${key} => ${this.table[key].toString()}},\n`;
    }

    return objString;
  }
}

export default HashTable;
