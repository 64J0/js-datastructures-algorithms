const items = new WeakMap();

// Usando o WeakMap garantimos que as propriedades são privadas todavia não é possível herdar
// esta classe.
class Stack {
  constructor() {
    // definimos o valor de items no construtor, especificando this (referência á class Stack)
    // como a chave do WeakMap e o array que representa a pilha como o valor.
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }

  peek() {
    const s = items.get(this);
    return s[s.length - 1];
  }

  isEmpty() {
    const s = items.get(this);
    return s.length === 0;
  }

  clear() {
    items.set(this, []);
  }

  size() {
    const s = items.get(this);
    return s.length;
  }
}

export default Stack;
