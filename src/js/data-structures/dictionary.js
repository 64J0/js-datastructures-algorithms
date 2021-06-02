import {defaultToString} from '../util.js';
import {ValuePair} from './models/value-pair.js';

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // adiciona um novo elemento ao dicionário.
  // se a key já existir, seu valor será sobrescrito com o novo valor
  set(key, value) {
    if (key && value) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }

    return false;
  }

  hasKey(key) {
    const keyString = this.toStrFn(key);
    return !!this.table[keyString];
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return !valuePair ? undefined : valuePair.value;
  }

  clear() {
    this.table = {};
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  // retorna um array com todas as chaves armazenadas no dicionário
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  // retorna um array com todos os values armazenados no dicionário
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  keyValues() {
    return Object.values(this.table);
  }

  forEach(callBackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callBackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  toString() {
    if (this.isEmpty()) return '';

    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;

    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }

    return objString;
  }
}

export default Dictionary;
